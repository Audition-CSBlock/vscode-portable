"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class DidClickCommand {
    constructor() {
        this.id = '_markdown.didClick';
    }
    execute(uri, line) {
        const sourceUri = vscode.Uri.parse(decodeURIComponent(uri));
        return vscode.workspace.openTextDocument(sourceUri)
            .then(document => vscode.window.showTextDocument(document))
            .then(editor => vscode.commands.executeCommand('revealLine', { lineNumber: Math.floor(line), at: 'center' })
            .then(() => editor))
            .then(editor => {
            if (editor) {
                editor.selection = new vscode.Selection(new vscode.Position(Math.floor(line), 0), new vscode.Position(Math.floor(line), 0));
            }
        });
    }
}
exports.DidClickCommand = DidClickCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/extensions\markdown\out/commands\didClick.js.map
