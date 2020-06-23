//Плагин загружен через объявление глоб переменной в WEBPACK new webpack.ProvidePlugin
//import * as $ from 'jquery/'

// SCSS
import '~/main/main.scss'
// JS


// require
require.context('~/project', true, /\.(png|svg|jpg|ico|mp3)$/);
require.context('~/project', true, /\.(ttf|woff|woff2|eot)$/);
require.context('~/pages', true, /\.(png|svg|jpg|ico|mp3)$/);




//import '~/project/common.blocks/ui kit/logo_UI.png'


/*
// Vue.js
window.Vue = require('vue')
// Vue components (for use in html)
Vue.component('example-component', require('~/components/Example.vue').default)
// Vue init
const app = new Vue({
	el: '#app'
})
*/







