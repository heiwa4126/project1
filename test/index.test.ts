import { describe, expect, it } from "vitest";
import { greet } from "../src/index";

describe("index", () => {
	describe("greet", () => {
		it('should return "Hello, world!" message', () => {
			const result = greet();
			expect(result).toBe("Hello, world!");
		});

		it("should return a string", () => {
			const result = greet();
			expect(typeof result).toBe("string");
		});

		it("should not be empty", () => {
			const result = greet();
			expect(result).not.toBe("");
			expect(result.length).toBeGreaterThan(0);
		});
	});
});
