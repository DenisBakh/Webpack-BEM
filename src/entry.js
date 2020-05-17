import * as $ from 'jquery/'

import './project/common.blocks/ui_kit/form_elements/text-field/jquery.maskedinput.min'
import './project/common.blocks/ui_kit/form_elements/text-field/mask-it'





/*
$(document).ready(function () {
	//Inputmask().mask(document.querySelectorAll(".text-field__input_date"));
	//$(".text-field__input_date").inputmask("99/99/9999", { "placeholder": "dd/mm/yyyy" });
	$(".text-field__input_date").inputmask("99.99.9999", {
		showMaskOnHover: true

	});
});
*/

// JS
import './assets/js'
import './project/common.blocks/ui_kit/form_elements/dropdawn/dropdawn'

import noUiSlider from './project/common.blocks/ui_kit/form_elements/range-slider/nouislider.min.js'
import './project/common.blocks/ui_kit/form_elements/range-slider/nouislider.min.css'
//import './project/common.blocks/ui_kit/form_elements/range-slider/range-slider.js'







window.addEventListener("load", function () {
	const priceSlider = document.getElementById('r-slider');

	noUiSlider.create(priceSlider, {
		start: [10, 200], //значения по умолчанию
		tooltips: true, //подсказки на бегунках
		connect: true, //закраска полоски между бегунками connect: [true,false] - диапазоны ,е сли ползунок 1
		padding: 6, //отступ от крайних значений слайдера, за которые нельзя хаодить
		//step:1, //шаг
		range: {
			'min': 0,
			'max': 200
		},
		pips: { //линейка
			mode: 'values',
			values: [50, 100, 150],
			density: 4
		}
	});

	console.log(12312);



	priceSlider.noUiSlider.on('change', (value, handle) => {
		console.log(priceSlider.noUiSlider.get());
	});

	const resetButton = document.getElementsByClassName('reset');

	resetButton.onclick = (e) => {
		priceSlider.noUiSlider.reset();
	};
});














// SCSS
import './assets/scss/index.scss'


require.context('./project', true, /\.(png|svg|jpg|ico|mp3)$/);
require.context('./project', true, /\.(ttf|woff|woff2|eot)$/);


//import './project/common.blocks/ui kit/logo_UI.png'



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







