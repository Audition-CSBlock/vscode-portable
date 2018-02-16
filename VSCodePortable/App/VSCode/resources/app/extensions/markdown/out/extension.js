"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const markdownEngine_1 = require("./markdownEngine");
const security_1 = require("./security");
const logger_1 = require("./logger");
const commandManager_1 = require("./commandManager");
const commands = require("./commands/index");
const telemetryReporter_1 = require("./telemetryReporter");
const markdownExtensions_1 = require("./markdownExtensions");
const documentLinkProvider_1 = require("./features/documentLinkProvider");
const documentSymbolProvider_1 = require("./features/documentSymbolProvider");
const previewContentProvider_1 = require("./features/previewContentProvider");
function activate(context) {
    const telemetryReporter = telemetryReporter_1.loadDefaultTelemetryReporter();
    context.subscriptions.push(telemetryReporter);
    const cspArbiter = new security_1.ExtensionContentSecurityPolicyArbiter(context.globalState, context.workspaceState);
    const engine = new markdownEngine_1.MarkdownEngine();
    const logger = new logger_1.Logger();
    const selector = 'markdown';
    const contentProvider = new previewContentProvider_1.MarkdownContentProvider(engine, context, cspArbiter, logger);
    markdownExtensions_1.loadMarkdownExtensions(contentProvider, engine);
    const webviewManager = new previewContentProvider_1.MarkdownPreviewWebviewManager(contentProvider);
    context.subscriptions.push(webviewManager);
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(selector, new documentSymbolProvider_1.default(engine)));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(selector, new documentLinkProvider_1.default()));
    const previewSecuritySelector = new security_1.PreviewSecuritySelector(cspArbiter, webviewManager);
    const commandManager = new commandManager_1.CommandManager();
    context.subscriptions.push(commandManager);
    commandManager.register(new commands.ShowPreviewCommand(webviewManager, telemetryReporter));
    commandManager.register(new commands.ShowPreviewToSideCommand(webviewManager, telemetryReporter));
    commandManager.register(new commands.ShowSourceCommand());
    commandManager.register(new commands.RefreshPreviewCommand(webviewManager));
    commandManager.register(new commands.RevealLineCommand(logger));
    commandManager.register(new commands.MoveCursorToPositionCommand());
    commandManager.register(new commands.ShowPreviewSecuritySelectorCommand(previewSecuritySelector));
    commandManager.register(new commands.OnPreviewStyleLoadErrorCommand());
    commandManager.register(new commands.DidClickCommand());
    commandManager.register(new commands.OpenDocumentLinkCommand(engine));
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
        logger.updateConfiguration();
        webviewManager.updateConfiguration();
    }));
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(event => {
        if (previewContentProvider_1.isMarkdownFile(event.textEditor.document)) {
            const markdownFile = previewContentProvider_1.getMarkdownUri(event.textEditor.document.uri);
            logger.log('updatePreviewForSelection', { markdownFile: markdownFile.toString() });
            vscode.commands.executeCommand('_workbench.htmlPreview.postMessage', markdownFile, {
                line: event.selections[0].active.line
            });
        }
    }));
}
exports.activate = activate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/extensions\markdown\out/extension.js.map
