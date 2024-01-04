const { merge } = require('webpack-merge')
const baseCfg = require('./webpack.config')

module.exports = merge(baseCfg('module'), {
	experiments: {
		outputModule: true
	}
})
