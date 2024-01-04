const clear = require("rollup-plugin-clear");
const autoAdd = require("rollup-plugin-auto-add").default;
const typescript = require("rollup-plugin-typescript2");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepExternal = require("rollup-plugin-peer-deps-external");
const terser = require("@rollup/plugin-terser");
const path = require("path");
const dts = require("rollup-plugin-dts").default;

module.exports = [
	{
		input: "src/index.ts",
		output: [
			{
				dir: "dist",
				format: "esm",
			},
		],
		plugins: [
			// 自动清除生成代码
			clear({ target: "dist/**/*" }),
			// 代码自动注入用的
			autoAdd({
				include: [/src\/(((?!\/).)+?)\/index\.tsx/gi],
			}),
			// 解析 ts
			typescript({
				tsconfig: path.resolve(__dirname, "./tsconfig.json"),
			}),
			terser(),
			peerDepExternal(),
			resolve(), // node_module
			commonjs(),
		],
	},

	{
		input: "dist/index.d.ts",
		output: [{ file: "dist/types/cupx-local.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
