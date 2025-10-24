import { greet } from "./index.js";

// 注意: パッケージ内でimportする場合、ESM環境では拡張子が必要です。
// TypeScriptでは `import "./index.js"` と書いても実際にはindex.tsが読まれます。
// これは node.js の仕様です。バグじゃありません。DinoやBunではうまいこと処理します。

console.log(greet());
