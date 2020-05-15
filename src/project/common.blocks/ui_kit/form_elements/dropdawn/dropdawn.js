import * as $ from 'jquery/'

//Получаем все "select" по селектору
/*
window.addEventListener("load", function () {

	const selects = document.querySelectorAll('.select')
	//переборка по полученным "select"
	for (let i = 0; i < selects.length; i++) {
		const select = selects[i]
		//получаем все "option" внутри "select"
		const options = select.querySelectorAll('option')

		//создаем кастомный "select"
		const customSelect = document.createElement('div')
		const customSelectList = document.createElement('div')
		const customSelectCurrent = document.createElement('button')

		select.setAttribute('tabindex', '-1')
		//задем классы и атрибуты кастомному "select"
		customSelect.className = 'custom-select'
		customSelectList.className = 'custom-select__list'
		customSelectCurrent.className = 'custom-select__current'

		//по умолчанию у button будет type="submit", поэтому меням на type="button" чтобы избежать отправку формы при клие на кастомный "select"
		customSelectCurrent.setAttribute('type', 'button')

		//создаем вложенность созданных элементов
		customSelect.append(customSelectCurrent, customSelectList)

		//добавляем кастоный "select" сразу после оргинального "select"
		select.after(customSelect)

		//получаем список и значения "option" из "select", затем создаём кастомный "option" для кастоного "select"
		const createCustomDom = function (x, y) {
			let selectItems = ''
			// for(option of options){
			// 	selectItems += `<button type="button" class="custom-select__item" data-value="${option.value}">${option.text}</button>`
			// }
			for (var i = 0; i < options.length; i++) {
				selectItems += '<button type="button" class="custom-select__item" data-value="' + options[i].value + '">' + options[i].text + '</button>'
			}
			customSelectList.innerHTML = selectItems
			x(), y();
		}

		//открываем-закрываем выпадающий список по клику
		const toggleClass = () => { customSelect.classList.toggle('custom-select--show') }

		//присваиваем текстовое первое значение "option" в кастомном "select"
		const currentTextValue = () => customSelectCurrent.textContent = customSelectList.children[0].textContent

		//получаем и задаем значения text/value
		const currentValue = () => {
			const items = customSelectList.children
			for (var el = 0; el < items.length; el++) {
				let selectValue = items[el].getAttribute('data-value')
				let selectText = items[el].textContent
				items[el].addEventListener('click', () => {
					customSelect.classList.remove('custom-select--show')
					customSelectCurrent.textContent = selectText
					select.value = selectValue
				})
			}
		}

		const desctopFn = () => {
			customSelectCurrent.addEventListener('click', toggleClass)
		}

		const mobileFn = () => {
			for (let j = 0; j < selects.length; j++) {
				let mobileSelect = selects[j]
				mobileSelect.addEventListener('change', () => {
					mobileSelect.nextElementSibling.querySelector('.custom-select__current').textContent = mobileSelect.value
				})
			}
		}

		createCustomDom(currentTextValue, currentValue)


		//закрываем выпадающий список по клику вне области кастомного селекта
		document.addEventListener('mouseup', (e) => {
			if (!customSelect.contains(e.target)) customSelect.classList.remove('custom-select--show')
		})

		detectmob(mobileFn, desctopFn)

		function detectmob(x, y) {
			if (navigator.userAgent.match(/Android/i)
				|| navigator.userAgent.match(/webOS/i)
				|| navigator.userAgent.match(/iPhone/i)
				|| navigator.userAgent.match(/iPad/i)
				|| navigator.userAgent.match(/iPod/i)
				|| navigator.userAgent.match(/BlackBerry/i)
				|| navigator.userAgent.match(/Windows Phone/i)
			) {
				x();
			}
			else {
				y();
			}
		}
	}

});*/

$(document).ready(function ($) {
	// FOR QUANTITY
	$('.counter__minus').on('click', function (e) {

		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.counter').find('.counter__cnt');

		var value = parseInt($input.val());
		console.log(value);
		if (value > 0) {
			value = value - 1;
		} else {
			value = 0;
		}

		if ((!$this.closest('.counter').find('.counter__plus').hasClass("counter__btn_active")) && (value < 100)) {
			$this.closest('.counter').find('.counter__plus').addClass("counter__btn_active")
		}

		if (($this.hasClass("counter__btn_active")) && (value === 0)) {
			$this.removeClass("counter__btn_active")
		}


		$input.val(value);
	});

	$('.counter__plus').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.counter').find('.counter__cnt');
		var value = parseInt($input.val());
		if (value < 100) {
			value = value + 1;
		} else {
			value = 100;
		}

		if ((!$this.closest('.counter').find('.counter__minus').hasClass("counter__btn_active")) && (value > 0)) {
			$this.closest('.counter').find('.counter__minus').addClass("counter__btn_active")
		}


		if (($this.hasClass("counter__btn_active")) && (value === 100)) {
			$this.removeClass("counter__btn_active")
		}


		$input.val(value);
	});


	//TOGGLE ACTIVE на DROPDAWN
	$('.text-field__input_dropDawn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $dd = $this.closest('.text-field__wrapper');
		$this.toggleClass("active");
		$dd.find('.dropdawn-field').toggleClass("active");
		$dd.toggleClass("active");
	});


	$('.dropdawn-field__clear').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.text-field__wrapper').find('.counter__cnt');
		var $minus = $this.closest('.text-field__wrapper').find('.counter__minus');
		var $plus = $this.closest('.text-field__wrapper').find('.counter__plus');
		var $textfield = $this.closest('.text-field__wrapper').find('.text-field__input');
		$input.val(0);

		$minus.removeClass('counter__btn_active')
		$plus.addClass('counter__btn_active')

		$textfield.text('Сколько гостей')
	});
	$('.dropdawn-field__accept').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.text-field__wrapper').find('.counter__cnt');
		console.log($input)
		var $textfield = $this.closest('.text-field__wrapper').find('.text-field__input');

		var $cnt = 0;
		$.each($input, function (index, value) {
			$cnt = $cnt + parseInt($(this).val());
			//console.log('Индекс: ' + index + '; Значение: ' + parseInt($(this).val()));
		});

		if ($cnt > 0) {
			function declension(num, expressions) {
				var result;
				var count = num % 100;
				if (count >= 5 && count <= 20) {
					result = expressions['2'];
				} else {
					count = count % 10;
					if (count == 1) {
						result = expressions['0'];
					} else if (count >= 2 && count <= 4) {
						result = expressions['1'];
					} else {
						result = expressions['2'];
					}
				}
				return result;
			};
			$textfield.text($cnt + ' ' + declension($cnt, ['гость', 'гостя', 'гостей']));
		} else {
			$textfield.text('Сколько гостей');
		}

	});


	//Скрытие по клику вне DropDAWM
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".text-field__wrapper.active"); // тут указываем класс 
		var input = div.find('.text-field__input_dropDawn')
		var dd = div.find('.dropdawn-field')
		console.log(33)
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0 // и не по его дочерним элементам
			&& $('.text-field__input_dropDawn').hasClass('active')) {
			div.removeClass('active');
			input.removeClass('active');
			dd.removeClass('active');
		}
	});
});



/*

function declension(num, expressions) {
	var result;
	var count = num % 100;
	if (count >= 5 && count <= 20) {
		result = expressions['2'];
	} else {
		count = count % 10;
		if (count == 1) {
			result = expressions['0'];
		} else if (count >= 2 && count <= 4) {
			result = expressions['1'];
		} else {
			result = expressions['2'];
		}
	}
	return result;
};

//alert(declension(1, ['пользователь', 'пользователя', 'пользователей']));
*/

