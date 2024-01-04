const path = require('path')

module.exports = function (libraryType) {
	return {
		mode: 'production',
		// mode: 'development',
		// 1. 输入输出 部分
		// 最基础的，入口
		entry: [path.resolve(__dirname, '../src/index.ts')],
		// entry: {
		// 	cupx: {
		// 		import: path.resolve(__dirname, '../src/index.ts'),
		// 		runtime: 'testRuntime'
		// 	}
		// },
		output: {
			// 打包输出的结果路径
			path: path.resolve(__dirname, `../dist/${libraryType}/`),
			// 每个输出的 js 的名称
			// hash, contentHash, chunkHash
			// filename: "[name].[hash:8].js",
			filename: `cupx.${libraryType}.js`,
			// webpack5 内置，构建前删除一下 dist.
			// webpack4 没有，clean-webpack-plugin.
			clean: true,
			// 打包后文件的公共前缀路径
			publicPath: '/',

			// 输出esm/umd规范
			library: {
				type: libraryType
			}
		},

		// 2. resolve 部分
		// extensions, 是 webpack 的解析项，用于在引入模块时，可以不带文件后缀
		resolve: {
			// 这个优先级，也是会影响性能的。
			extensions: ['.ts', '.js']
		},

		// 3. loader 部分
		module: {
			// loader 就是你在从入口文件，去解析各种 import from 的文件时。
			// 针对不同的文件，有不同的处理方法，这些不同后缀的文件，需要有一个
			// 解析器，去识别它的含义，从而保证可以最后形成一个 bundle.
			rules: [
				{
					test: /\.(ts|js)$/,
					use: {
						loader: 'babel-loader'
					}
				}
			]
		},

		plugins: []
	}
}
