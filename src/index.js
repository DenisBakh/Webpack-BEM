import * as $ from 'jquery'



// JS
import './js/'
//import './js/require.js'


// SCSS
import './assets/scss/main.scss'

//const moduleA = require('webpack-bundle-analyzer');

require.context('./', true, /\.(png|svg|jpg|mp3)$/);

// CSS (example)
// import './assets/css/main.css'

/*
// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
*/







