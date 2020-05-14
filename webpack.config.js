const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config
}

//Main const
const PATHS = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist'),
	assets: 'assets/'
}
//Pages const for HTMLWebpackPlugin
//const PAGES_DIR=PATHS.src
const PAGES_DIR = `${PATHS.src}/pages`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

//const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
//const filenameCss = ext => isDev ? `${PATHS.assets}css/[name].css` : `${PATHS.assets}css/[name].[hash].css`
//const filenameJs = ext => isDev ? `${PATHS.assets}js/[name].js` : `${PATHS.assets}js/[name].[hash].js`

const filenameCss = ext => isDev ? `${PATHS.assets}css/[name].css` : `${PATHS.assets}css/[name].css`
const filenameJs = ext => isDev ? `${PATHS.assets}js/[name].js` : `${PATHS.assets}js/[name].js`

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true
			},
		},
		'css-loader'
	]

	if (extra) {
		loaders.push(extra)
	}

	return loaders
}

const babelOptions = preset => {
	const opts = {
		presets: [
			'@babel/preset-env'
		],
		plugins: [
			'@babel/plugin-proposal-class-properties'
		],
	}

	if (preset) {
		opts.presets.push(preset)
	}

	return opts
}

const jsLoaders = () => {
	const loaders = [{
		loader: 'babel-loader',
		options: babelOptions()
	}]

	/*	if (isDev) {
			loaders.push('eslint-loader')
		}
	*/
	return loaders
}

const plugins = () => {
	const base = [
		/*	new HTMLWebpackPlugin({
				//title: 'Webpack Dens',
				template: './index.html',
				minify: {
					collapseWhitespace: isProd
				}
			}),*/
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([ /*
			{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
			{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
			{ from: `${PATHS.src}/static`, to: '' },*/
		]),
		new MiniCssExtractPlugin({
			filename: filenameCss() //filename('css') //'[name].[contenthash].css'
		}),
		...PAGES.map(page => new HTMLWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page.replace(/\.pug/, '.html')}`,
			minify: {
				collapseWhitespace: isProd
			}
		}))
	]

	if (isProd) {
		base.push(new BundleAnalyzerPlugin())
	}

	return base
}

console.log('is dev', isDev)

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	/*externals: {
		path: PATHS
	},*/
	entry: {
		main: ['@babel/polyfill', './entry.js'],
	},
	output: {
		//filename: filename('js'),
		//path: path.resolve(__dirname, 'dist')
		filename: filenameJs(), //filename('js'),
		path: PATHS.dist,
		publicPath: '/'
	},
	resolve: {
		//extensions: [],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
			'~': PATHS.src,
			'vue$': 'vue/dist/vue.js',
		}
	},
	optimization: optimization(),
	devServer: {
		port: 4200,
		//hot: isDev,
		contentBase: path.resolve(__dirname, 'dist')
	},
	devtool: isDev ? 'source-map' : '',
	plugins: plugins(),
	module: {
		rules: [
			/*{
				test: /\.pug$/,
				oneOf: [
					// this applies to <template lang="pug"> in Vue components
					{
						resourceQuery: /^\?vue/,
						use: ['pug-plain-loader']
					},
					// this applies to pug imports inside JavaScript
					{
						use: ['pug-loader']
					}
				]
			},*/
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.css$/,
				//use: ['style-loader', 'css-loader']
				use: cssLoaders()
			},
			{
				test: /\.less$/,
				use: cssLoaders('less-loader')
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader?sourceMap')
			},
			{
				test: /\.(png|svg|jpe?g|ico|mp3)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: `${PATHS.assets}img`,
							name: '[name].[ext]',
							esModule: false
						}
					}
				]
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: `${PATHS.assets}fonts`,
							name: '[name].[ext]',
							esModule: false
						}
					}
				]
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: jsLoaders()
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-typescript')
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: babelOptions('@babel/preset-react')
				}
			}
		]
	}
}