const clear = require("rollup-plugin-clear");
const autoAdd = require("rollup-plugin-auto-add").default;
const typescript = require("rollup-plugin-typescript2");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const alias = require("@rollup/plugin-alias");
const peerDepExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");
const terser = require("@rollup/plugin-terser");
const multiInput = require("rollup-plugin-multi-input").default;
const filesize = require("rollup-plugin-filesize");
const path = require("path");

const dts = require("rollup-plugin-dts").default;

const pkg = require("../package.json");
module.exports = [
	{
		input: "src/**/*",
		output: [
			{
				dir: "dist",
				format: "esm",
			},
		],

		// includeDependencies: false,
		// external: Object.keys(pkg.peerDependencies || {}),
		plugins: [
			// 自动清除生成代码
			clear({ target: "dist" }),
			// 代码自动注入用的
			autoAdd({
				include: [/src\/(((?!\/).)+?)\/index\.tsx/gi],
			}),
			// 多入口
			multiInput(),
			// 解析 ts
			typescript({
				tsconfig: path.resolve(__dirname, "./tsconfig.esm.json"),
			}),
			terser(),
			peerDepExternal(),
			resolve(), // node_module
			commonjs(),
			// filesize(),
		],
	},

	{
		input: "dist/index.d.ts",
		output: [{ file: "dist/cupx-react.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
