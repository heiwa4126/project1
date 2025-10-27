import { describe, expect, it } from "vitest";

// TypeScriptでは `import "./index.js"` と書いても実際にはindex.tsが読まれます。
// これは TypeScript の仕様です。バグじゃありません
import { greet } from "../src/index.js";

describe("index", () => {
	describe("greet", () => {
		it('should return "Hello, world!" message', () => {
			const result = greet();
			expect(result).toBe("Hello, world!");
		});
	});
});
