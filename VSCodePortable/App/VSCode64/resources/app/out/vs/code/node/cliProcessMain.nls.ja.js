/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.ja",{"vs/base/common/severity":["エラー","警告","情報"],"vs/base/node/zip":["zip ファイルの中に {0} が見つかりません。"],"vs/code/node/cliProcessMain":["拡張機能 '{0}' が見つかりませんでした。","拡張機能 '{0}' がインストールされていません。","発行元などの完全な拡張機能 ID を使用していることをご確認ください。例: {0}","拡張機能 '{0}' が正常にインストールされました。","拡張機能 '{0}' のインストールをキャンセルしました。","拡張機能 '{0}' は既にインストールされています。","Marketplace で '{0}' が見つかりました。","インストールしています...","拡張機能 '{0}' v{1} が正常にインストールされました!","拡張機能 '{0}' のインストールをキャンセルしました。","{0} をアンインストールしています...","拡張機能 '{0}' が正常にアンインストールされました!"],"vs/platform/configuration/common/configurationRegistry":["既定の構成オーバーライド","{0} 言語に対して上書きされるエディター設定を構成します。","言語に対して上書きされるエディター設定を構成します。","'{0}' を登録できません。これは、言語固有のエディター設定を記述するプロパティ パターン '\\\\[.*\\\\]$' に一致しています。'configurationDefaults' コントリビューションを使用してください。","'{0}' を登録できません。このプロパティは既に登録されています。"],"vs/platform/extensionManagement/common/extensionManagement":["拡張機能","基本設定"],
"vs/platform/extensionManagement/node/extensionGalleryService":["VS Code の現在のバージョン '{0}' と互換性を持つ拡張機能が見つからないため、ダウンロードできません。"],"vs/platform/extensionManagement/node/extensionManagementService":["正しくない拡張機能: package.json は JSON ファイルではありません。","{0} を再インストールする前に、Code を再起動してください。","この拡張機能の新しいバージョンが既にインストールされています。古いバージョンでこれを上書きしますか?","上書き","キャンセル","依存関係のインストール中にエラーが発生しました。{0}","'{0}' をインストールできません。VS Code '{1}' と互換性がある利用可能なバージョンがありません。","問題が報告されたので、拡張機能をインストールできません。","VS Code の現在のバージョン '{1}'  と互換性を持つ、依存関係がある拡張機能 '{0}' が見つからないため、インストールできません。","拡張機能をインストールできません。再インストールの前に VS Code の終了と起動を実施してください。","拡張機能をインストールできません。再インストールの前に VS Code の終了と起動を実施してください。","'{0}' のみをアンインストールしますか、または依存関係もアンインストールしますか?","限定","すべて","キャンセル","'{0}' をアンインストールしてもよろしいですか?","OK","キャンセル","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}' がこの拡張機能に依存しています。","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}' と '{2}' がこの拡張機能に依存しています。","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}'、'{2}'、その他がこの拡張機能に依存しています。","拡張機能を見つけられませんでした"],
"vs/platform/extensions/node/extensionValidator":["`engines.vscode` 値 {0} を解析できませんでした。使用可能な値の例: ^0.10.0、^1.2.3、^0.11.0、^0.10.x など。","`engines.vscode` ({0}) で指定されたバージョンが十分に特定されていません。1.0.0 より前の vscode バージョンの場合は、少なくとも想定されているメジャー バージョンとマイナー バージョンを定義してください。例 ^0.10.0、0.10.x、0.11.0 など。","`engines.vscode` ({0}) で指定されたバージョンが明確ではありません。1.0.0 より後のバージョンの vscode の場合は、少なくとも、想定されているメジャー バージョンを定義してください。例 ^1.10.0、1.10.x、1.x.x、2.x.x など。","拡張機能が Code {0} と互換性がありません。拡張機能に必要なバージョン: {1}。","空の拡張機能の説明を入手しました","`{0}` プロパティは必須で、`string` 型でなければなりません","`{0}` プロパティは必須で、`string` 型でなければなりません","`{0}` プロパティは必須で、`string` 型でなければなりません","`{0}` プロパティは必須で、`string` 型でなければなりません","`{0}` プロパティは必須で、`string` 型でなければなりません","`{0}` プロパティは省略するか、`string[]` 型にする必要があります","`{0}` プロパティは省略するか、`string[]` 型にする必要があります","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","`{0}` プロパティは省略するか、`string` 型にする必要があります","拡張機能のフォルダー ({1}) の中に `main` ({0}) が含まれることが予期されます。これにより拡張機能を移植できなくなる可能性があります。","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","拡張機能のバージョンが semver と互換性がありません。"],
"vs/platform/message/common/message":["閉じる","後続","キャンセル","...1 つの追加ファイルが表示されていません","...{0} 個の追加ファイルが表示されていません"],"vs/platform/request/node/request":["HTTP","使用するプロキシ設定。設定されていない場合、環境変数 http_proxy および https_proxy から取得されます。","提供された CA の一覧と照らしてプロキシ サーバーの証明書を確認するかどうか。","すべてのネットワーク要求に対して 'Proxy-Authorization' ヘッダーとして送信する値。"],"vs/platform/telemetry/common/telemetryService":["テレメトリ","利用状況データとエラーを Microsoft に送信できるようにします。"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/936b796aa8667de5edb536b00ce8a8e61fcebfb6/core/vs\code\node\cliProcessMain.nls.ja.js.map
