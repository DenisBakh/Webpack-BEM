//=========RANGE-SLIDER noUiSlider ==================
//document.addEventListener("DomcontentLoaded", () => {
import noUiSlider from '../range-slider/noUiSlider.min.js'


window.addEventListener("load", function () {
	const priceSlider = document.getElementById('r-slider');

	noUiSlider.create(priceSlider, {
		start: [6000, 9000], //значения по умолчанию
		tooltips: false, //подсказки на бегунках
		connect: true, //закраска полоски между бегунками connect: [true,false] - диапазоны ,е сли ползунок 1
		padding: 6, //отступ от крайних значений слайдера, за которые нельзя хаодить
		//step:1, //шаг
		range: {
			'min': 5000,
			'max': 10000
		},
		/*
		pips: { //линейка
			mode: 'values',
			values: [50, 100, 150],
			density: 4
		}
		*/
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
