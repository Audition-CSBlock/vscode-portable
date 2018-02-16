"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const previewContentProvider_1 = require("../features/previewContentProvider");
class RevealLineCommand {
    constructor(logger) {
        this.logger = logger;
        this.id = '_markdown.revealLine';
    }
    execute(uri, line) {
        const sourceUri = vscode.Uri.parse(decodeURIComponent(uri));
        this.logger.log('revealLine', { uri, sourceUri: sourceUri.toString(), line });
        vscode.window.visibleTextEditors
            .filter(editor => previewContentProvider_1.isMarkdownFile(editor.document) && editor.document.uri.toString() === sourceUri.toString())
            .forEach(editor => {
            const sourceLine = Math.floor(line);
            const fraction = line - sourceLine;
            const text = editor.document.lineAt(sourceLine).text;
            const start = Math.floor(fraction * text.length);
            editor.revealRange(new vscode.Range(sourceLine, start, sourceLine + 1, 0), vscode.TextEditorRevealType.AtTop);
        });
    }
}
exports.RevealLineCommand = RevealLineCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/extensions\markdown\out/commands\revealLine.js.map
