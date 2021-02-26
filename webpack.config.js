const path = require('path');

module.exports = () => ({
	output: {
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: 'js/_[name].js',
	},
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		disableHostCheck: true,
		sockPort: 8089,
		host: '0.0.0.0',
		port: 8089,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'~': path.resolve(__dirname, 'src'),
		},
	},
});
