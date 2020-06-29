// SCSS
import '~/pages/search/search.scss'

import '~/pages/common/common/common.js'

import '~/project/common.blocks/ui_kit/form_elements/text-field/jquery.maskedinput.min'
import '~/project/common.blocks/ui_kit/form_elements/text-field/mask-it'
import '~/project/common.blocks/ui_kit/form_elements/dropdawn/dropdawn'
import '~/project/common.blocks/ui_kit/form_elements/range-slider/range-slider.js'
import '~/project/common.blocks/ui_kit/form_elements/datepicker/datepicker.js'
import '~/project/common.blocks/ui_kit/form_elements/option-buttons/checkbox/checkbox-list/checkbox-list.js'
import '~/project/common.blocks/ui_kit/cards/slider/slider.js'
import '~/project/common.blocks/ui_kit/cards/room-card/room-card.js'
import '~/project/common.blocks/ui_kit/form_elements/pagination/pagination.js'


$(document).ready(function () {
	$('.filter-button').click(function () {
		var $this = $(this)
		var $parent = $this.closest('.content__column_filter')
		var $icon = $parent.find('.dropdawn-icon');
		var $content = $this.closest('.content')
		var $roomColumn = $content.find('.content__column_roomcards')
		$this.toggleClass('active')
		$parent.toggleClass('active')
		$icon.toggleClass('active')
		$roomColumn.toggleClass('disactive')
	});

})

