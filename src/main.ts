import { greet } from "./index.js";

// 注意: パッケージ内でimportする場合、ESM環境では拡張子が必要です。
// TypeScriptでは `import "./index.js"` と書いても実際にはindex.tsが読まれます。
// これは TypeScript(tsc) の仕様です。バグじゃありません。
// Bun や Viteでは `import { greet } from "./index` でうまいこと処理します。
// Deno では `import { greet } from "./index.ts` でないとダメです。

console.log(greet());
