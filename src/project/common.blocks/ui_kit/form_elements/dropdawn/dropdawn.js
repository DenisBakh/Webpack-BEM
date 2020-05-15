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
		if (value > 1) {
			value = value - 1;
		} else {
			value = 0;
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
		$input.val(value);
	});

});