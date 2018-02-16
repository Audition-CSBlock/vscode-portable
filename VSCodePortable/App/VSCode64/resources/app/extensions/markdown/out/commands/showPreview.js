"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function getViewColumn(sideBySide) {
    const active = vscode.window.activeTextEditor;
    if (!active) {
        return vscode.ViewColumn.One;
    }
    if (!sideBySide) {
        return active.viewColumn;
    }
    switch (active.viewColumn) {
        case vscode.ViewColumn.One:
            return vscode.ViewColumn.Two;
        case vscode.ViewColumn.Two:
            return vscode.ViewColumn.Three;
    }
    return active.viewColumn;
}
function showPreview(webviewManager, telemetryReporter, uri, sideBySide = false) {
    let resource = uri;
    if (!(resource instanceof vscode.Uri)) {
        if (vscode.window.activeTextEditor) {
            // we are relaxed and don't check for markdown files
            resource = vscode.window.activeTextEditor.document.uri;
        }
    }
    if (!(resource instanceof vscode.Uri)) {
        if (!vscode.window.activeTextEditor) {
            // this is most likely toggling the preview
            return vscode.commands.executeCommand('markdown.showSource');
        }
        // nothing found that could be shown or toggled
        return;
    }
    const view = webviewManager.create(resource, getViewColumn(sideBySide) || vscode.ViewColumn.Active);
    telemetryReporter.sendTelemetryEvent('openPreview', {
        where: sideBySide ? 'sideBySide' : 'inPlace',
        how: (uri instanceof vscode.Uri) ? 'action' : 'pallete'
    });
    return view;
}
class ShowPreviewCommand {
    constructor(webviewManager, telemetryReporter) {
        this.webviewManager = webviewManager;
        this.telemetryReporter = telemetryReporter;
        this.id = 'markdown.showPreview';
    }
    execute(mainUri, allUris) {
        for (const uri of (allUris || [mainUri])) {
            showPreview(this.webviewManager, this.telemetryReporter, uri, false);
        }
    }
}
exports.ShowPreviewCommand = ShowPreviewCommand;
class ShowPreviewToSideCommand {
    constructor(webviewManager, telemetryReporter) {
        this.webviewManager = webviewManager;
        this.telemetryReporter = telemetryReporter;
        this.id = 'markdown.showPreviewToSide';
    }
    execute(uri) {
        showPreview(this.webviewManager, this.telemetryReporter, uri, true);
    }
}
exports.ShowPreviewToSideCommand = ShowPreviewToSideCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/extensions\markdown\out/commands\showPreview.js.map
