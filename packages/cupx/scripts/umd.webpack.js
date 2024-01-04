const { merge } = require('webpack-merge')
const baseCfg = require('./webpack.config')

module.exports = merge(baseCfg('umd'), {
	output: {
		library: {
			name: 'cupx'
		}
	}
})
