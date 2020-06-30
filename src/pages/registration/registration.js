
// SCSS
import '~/pages/registration/registration.scss'

import '~/pages/common/common/common.js'

import '~/project/common.blocks/ui_kit/form_elements/text-field/jquery.maskedinput.min'
import '~/project/common.blocks/ui_kit/form_elements/text-field/mask-it'
import '~/project/common.blocks/ui_kit/form_elements/dropdawn/dropdawn'
//import '~/project/common.blocks/ui_kit/form_elements/range-slider/range-slider.js'
//import '~/project/common.blocks/ui_kit/form_elements/datepicker/datepicker.js'
//import '~/project/common.blocks/ui_kit/form_elements/spoiler/spoiler.js'
//import '~/project/common.blocks/ui_kit/form_elements/pagination/pagination.js'

//import '~/project/common.blocks/ui_kit/cards/room-card/room-card.js'

import '~/project/common.blocks/ui_kit/cards/common-blocks/room-header/room-header.js'



//==============Функция для перехода между табами ENTERANCE и REGISTRATION=================
$(document).ready(function () {
	/*
	$('.registry-form__button_enter').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $loginBlock = $this.closest('.login-block')
		var $toggleBlock = $loginBlock.find('.login-block__form')

		$toggleBlock.toggleClass('active')
	});
	*/

	//установление параметров по умолчанию
	var hash = document.location.hash;
	var tabs = $('.tab');

	if (hash) {
		var name = hash.slice(1);
		tabActivate(name);
	} else {
		tabActivate('registration');
	}

	//Для обновления по нажатию кнопок хэдера
	$(window).bind('hashchange', function () {
		hash = document.location.hash;
		if (hash) {
			name = hash.slice(1);
			tabActivate(name)
		} else {
			tabActivate('registration')
		}
	})
	//По нажатию кнопок в форме
	$('.registry-form__button_enter').click(function (e) {
		e.preventDefault();//без этого страница будет обновляться и в адресе якорь слетать
		tabActivate($(this).data('name'));
	})

	function tabActivate(name) {
		tabs.each(function (ind, tab) {
			if ($(tab).data('name') == name) {
				$(tab).addClass('active');
			} else {
				$(tab).removeClass('active');
			}
		});
		document.location.hash = '#' + name;
	}

})


