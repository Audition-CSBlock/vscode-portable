"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = 'file';
exports.untitled = 'untitled';
exports.walkThroughSnippet = 'walkThroughSnippet';
exports.supportedSchemes = [
    exports.file,
    exports.untitled,
    exports.walkThroughSnippet
];
function isSupportedScheme(scheme) {
    return exports.supportedSchemes.indexOf(scheme) >= 0;
}
exports.isSupportedScheme = isSupportedScheme;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6c22e21cdcd6811770ddcc0d8ac3174aaad03678/extensions\typescript-language-features\out/utils\fileSchemes.js.map
