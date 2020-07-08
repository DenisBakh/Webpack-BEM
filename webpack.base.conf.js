const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

//Main const
const PATHS = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist'),
	assets: 'assets/'
}

//Pages const for HTMLWebpackPlugin
const PAGES_DIR = `${PATHS.src}/pages`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))


//const filenameCss = ext => `${PATHS.assets}css/[name].[hash].css`
//const filenameJs = ext => `${PATHS.assets}js/[name].[hash].js`
const filenameCss = ext => `${PATHS.assets}css/[name].css`
const filenameJs = ext => `${PATHS.assets}js/[name].js`

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true
			},
		},
		'css-loader',
		'resolve-url-loader',
		{
			loader: 'postcss-loader',
			options: {
				sourceMap: true,
				config: { path: 'postcss.config.js' }
			},
		},
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

	if (isDev) {
		loaders.push('eslint-loader')
	}

	return loaders
}

const plugins = () => {
	const base = [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: filenameCss()
		}),
		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/project/common.blocks/_common/fonts`, to: `${PATHS.assets}fonts` }
		]),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery'",
			"window.$": "jquery",
		}),
		new HTMLWebpackPlugin(
			{
				filename: './index.html',
				template: `${PAGES_DIR}/index/index.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["index"]
			},
		),
		new HTMLWebpackPlugin(
			{
				filename: './search.html',
				template: `${PAGES_DIR}/search/search.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["search"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './detail.html',
				template: `${PAGES_DIR}/detail/detail.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["detail"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './registration.html',
				template: `${PAGES_DIR}/registration/registration.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["registration"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './ui_index.html',
				template: `${PAGES_DIR}/ui/_ui_index/ui_index.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["ui_index"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './ui_cards.html',
				template: `${PAGES_DIR}/ui/ui_cards/cards.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["ui_cards"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './ui_form_elements.html',
				template: `${PAGES_DIR}/ui/ui_form_elements/form_elements.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["ui_formelements"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './ui_color&type.html',
				template: `${PAGES_DIR}/ui/ui_colortype/color&type.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["ui_colortype"]
			}
		),
		new HTMLWebpackPlugin(
			{
				filename: './ui_headersfooters.html',
				template: `${PAGES_DIR}/ui/ui_headersfooters/ui_headersfooters.pug`,
				minify: {
					collapseWhitespace: isProd
				},
				chunks: ["ui_headersfooters"]
			}
		),
		/*
		...PAGES.map(page => new HTMLWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page.replace(/\.pug/, '.html')}`,
			minify: {
				collapseWhitespace: isProd
			}
		}))
		*/
	]

	return base
}

module.exports = {
	externals: {
		PATHS: PATHS,
	},

	entry: {
		main: ['./main/main.js'],
		//common: [ './pages/common/common.js'],
		index: ['./pages/index/index.js'],
		search: ['./pages/search/search.js'],
		detail: ['./pages/detail/detail.js'],
		registration: ['./pages/registration/registration.js'],
		//ui_common: [ './pages/ui/ui_common/ui_common.js'],
		ui_colortype: ['./pages/ui/ui_colortype/color&type.js'],
		ui_formelements: ['./pages/ui/ui_form_elements/form_elements.js'],
		ui_cards: ['./pages/ui/ui_cards/cards.js'],
		ui_headersfooters: ['./pages/ui/ui_headersfooters/ui_headersfooters.js'],
		ui_index: ['./pages/ui/_ui_index/ui_index.js']
		//`${PATHS.src}/js/about`,
	},
	output: {
		filename: filenameJs(),
		path: PATHS.dist,
		publicPath: '/'
	},

	context: path.resolve(__dirname, 'src'),


	resolve: {
		//extensions: [],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
			'~': PATHS.src,
			'vue$': 'vue/dist/vue.js',
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'all'//разбивает js файлы на чанки
		}
	},

	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true,
					root: PATHS.src
				}
			},
			{
				test: /\.css$/,
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
						loader: 'url-loader',
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