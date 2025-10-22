import { describe, expect, it } from "vitest";
import { greet } from "../src/index";

describe("index", () => {
	describe("greet", () => {
		it('should return "Hello, world!" message', () => {
			const result = greet();
			expect(result).toBe("Hello, world!");
		});
	});
});
