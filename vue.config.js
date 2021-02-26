const { merge } = require('webpack-merge');

module.exports = {
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: true,
	configureWebpack: () => merge(require('./webpack.config')()),
};
