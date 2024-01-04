module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser", // 解析器，解析ts 输出ast,eslint是根据ast来分析的
	parserOptions: {
		// 解析器配置
		ecmaVersion: "latest",
		sourceType: "module",
		// tsconfigRootDir: "./packages/cupx/tsconfig.json",
	},
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off",
	},
};
