
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

$(document).ready(function () {
	$('.registry-form__button_enter').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $loginBlock = $this.closest('.login-block')
		console.log($loginBlock)
		var $toggleBlock = $loginBlock.find('.login-block__form')

		$toggleBlock.toggleClass('active')

	});
})
