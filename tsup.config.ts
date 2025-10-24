import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "src/main.ts"],
	format: ["esm", "cjs"],
	target: "node18",
	outDir: "dist",
	bundle: false,
	shims: true,
	splitting: false,
	sourcemap: false, // デバッグのためソースマップを有効化
	minify: false, // 開発時は無効、本番ビルド時のみ有効化を検討
	clean: true,
	outExtension({ format }) {
		return {
			js: format === "cjs" ? ".cjs" : ".js",
		};
	},
	dts: {
		resolve: true,
		entry: ["src/index.ts"],
	},
	// CLIバイナリのshebang追加
	banner: {
		js: "#!/usr/bin/env node",
	},
	// 本番ビルド用の設定も追加可能
	env: {
		NODE_ENV: process.env.NODE_ENV || "development",
	},
	esbuildOptions(options) {
		options.resolveExtensions = [".ts", ".js"];
	},
});
