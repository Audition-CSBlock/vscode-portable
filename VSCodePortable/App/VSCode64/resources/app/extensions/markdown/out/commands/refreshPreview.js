"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const previewContentProvider_1 = require("../features/previewContentProvider");
class RefreshPreviewCommand {
    constructor(webviewManager) {
        this.webviewManager = webviewManager;
        this.id = 'markdown.refreshPreview';
    }
    execute(resource) {
        if (resource) {
            const source = vscode.Uri.parse(resource);
            this.webviewManager.update(source);
        }
        else if (vscode.window.activeTextEditor && previewContentProvider_1.isMarkdownFile(vscode.window.activeTextEditor.document)) {
            this.webviewManager.update(previewContentProvider_1.getMarkdownUri(vscode.window.activeTextEditor.document.uri));
        }
        else {
            this.webviewManager.updateAll();
        }
    }
}
exports.RefreshPreviewCommand = RefreshPreviewCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/extensions\markdown\out/commands\refreshPreview.js.map
