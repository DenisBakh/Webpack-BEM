//=========================HEADER======================

$(document).ready(function () {
	$('.header-menu__burger').on('click', function () {
		$this = $(this)
		$parent = $this.closest('.header-menu')
		$menu = $parent.find('.header-menu__nav')

		$this.toggleClass('active')
		$menu.toggleClass('active')
	})


	$('.header-nav__link').click(function (event) {
		var mq = window.matchMedia("(max-width: 1000px)");
		if (mq.matches) {
			$this = $(this)
			$this.toggleClass('active').next().slideToggle(500);
			$this.find('.dropdawn-icon').toggleClass("active");
			//$this.closest('.spoiler').toggleClass("active");
			//$this.closest('.spoiler').find('.spoiler__content').toggleClass("active");
		}
		else {
			// window width is greater than 570px
		}

	});


})