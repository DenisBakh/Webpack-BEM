const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devServer: {
		port: 8081,
		contentBase: baseWebpackConfig.externals.PATHS.dist, //path.resolve(__dirname, 'dist')
		hot: true,
		overlay: {
			warnings: false,
			errors: true
		}
	},
	devtool: '#cheap-module-eval-source-map', // конкретная карта сайта
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map' // Показывает импорты цсс??
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})