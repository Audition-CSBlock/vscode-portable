"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
function disposeAll(disposables) {
    while (disposables.length) {
        const item = disposables.pop();
        if (item) {
            item.dispose();
        }
    }
}
exports.disposeAll = disposeAll;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6c22e21cdcd6811770ddcc0d8ac3174aaad03678/extensions\typescript-language-features\out/utils\dipose.js.map
