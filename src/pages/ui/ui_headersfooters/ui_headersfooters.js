// SCSS
import '~/pages/ui/ui_headersfooters/ui_headersfooters.scss'
// jS
import '~/pages/common/common/common.js'

//костыль, чтобы один хэдер не перекрывал другой. Нужно только в ui_headersfooters
$(document).ready(function () {
	var headers = $(this).find('.header');
	headers.each(function (index) {
		var $this = $(this)
		$this.css(
			{ 'z-index': 'auto' }
		)
	});
})