const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',

	plugins: [
		new BundleAnalyzerPlugin(),//Анализатор проекта в браузере
		new OptimizeCssAssetWebpackPlugin(),//optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified).
		new TerserWebpackPlugin()//minify your JavaScript.
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(buildWebpackConfig)
})