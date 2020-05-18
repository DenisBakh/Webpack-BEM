//=========RANGE-SLIDER noUiSlider. Альтернатива Ion RangeSlider - поудачнее реализовано ==================
//document.addEventListener("DomcontentLoaded", () => {
import * as $ from 'jquery/'

import noUiSlider from '../range-slider/noUiSlider.min.js'
import wNumb from '~/project/common.blocks/_common/js/wNumb.min.js'



window.addEventListener("load", function () {
	const priceSlider = document.getElementsByClassName('r-slider');
	const updateSliderValueMin = document.getElementsByClassName('range-slider__from-upd');
	const updateSliderValueMax = document.getElementsByClassName('range-slider__to-upd');

	for (var i = 0, len = priceSlider.length; i < len; i++) {

		noUiSlider.create(priceSlider[i], {
			start: [5000, 10000], //значения по умолчанию
			tooltips: false, //подсказки на бегунках
			connect: true, //закраска полоски между бегунками connect: [true,false] - диапазоны ,е сли ползунок 1
			//padding: 6, //отступ от крайних значений слайдера, за которые нельзя хаодить
			//step:1, //шаг
			range: {
				'min': 0,
				'max': 15000
			},
			/*
			pips: { //линейка
				mode: 'values',
				values: [50, 100, 150],
				density: 4
			}
			*/
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				//suffix: ' (US $)'
			})
		});

	};
	/* Решить вопрос с множеством слайдеров
		var $this = $(priceSlider[i]);
		var $input = $this.closest('.range-slider').find('.range-slider__from-upd');
		console.log($input);
	
		var $updateSliderValueMin = $input;
	*/


	priceSlider[0].noUiSlider.on('update', function (values, handle) {
		if (!handle) {
			updateSliderValueMin[0].innerHTML = values[handle];
		} else {
			updateSliderValueMax[0].innerHTML = values[handle];
		}
	});



	const resetButton = document.getElementsByClassName('reset');

	resetButton.onclick = (e) => {
		priceSlider.noUiSlider.reset();
	};


});
