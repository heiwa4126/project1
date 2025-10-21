import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/main.ts"],
	format: ["esm", "cjs"],
	outDir: "dist",
	bundle: true,
	splitting: false,
	sourcemap: false,
	clean: true,
	dts: {
		resolve: true,
		entry: ["src/index.ts"],
	},
});
