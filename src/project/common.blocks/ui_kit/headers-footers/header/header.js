//=========================HEADER======================

$(document).ready(function () {
	//Т.к. header position:fixed, он выпадает из потока, поэтому рассчитываем отступ верхний у контента в величине высоты header
	var headerHeight = $('.header_fixed').innerHeight()
	$('.main').css({
		'margin-top': headerHeight
	})
	window.addEventListener('resize', reportWindowSize);
	function reportWindowSize() {
		currentWidth = window.innerWidth
		var headerHeight = $('.header').innerHeight()
		$('.main').css({
			'margin-top': headerHeight
		})
	}

	//бургер
	$('.burger-menu').on('click', function () {
		$this = $(this)
		$parent = $this.closest('.header')
		$menu = $parent.find('.header-menu__nav')

		//$parent.toggleClass('active')
		$this.toggleClass('active')
		$menu.toggleClass('active')
	})

	// Меняем подменю на выпадающий список при screen-width<=1000
	$('.header-nav__link').click(function (event) {
		var mq = window.matchMedia("(max-width: 1000px)");
		if (mq.matches) {
			//линк a всегда бросает к верху страницы, поэтому на будущее – либо не использовать линки для подобных задач, либо вот .preventDefault().
			event.preventDefault();
			$this = $(this)
			$this.toggleClass('active').next().slideToggle(500);
			$this.find('.dropdawn-icon').toggleClass("active");
			//$this.closest('.spoiler').toggleClass("active");
			//$this.closest('.spoiler').find('.spoiler__content').toggleClass("active");

			var mq = window.matchMedia("(max-width: 600px)");
			if (mq.matches) {
				var headerHeight = $('.header').innerHeight()
				var main = $('.main').css({
					'margin-top': headerHeight
				})
			}

		}
		else {
			// window width is greater than 570px
		}

	});

	/*
		var stickyOffset = $('.header').offset().top;
	
		$(window).scroll(function () {
			var sticky = $('.header'),
				scroll = $(window).scrollTop();
	
			if (scroll >= stickyOffset) {
				sticky.addClass('fixed');
			} else {
				sticky.removeClass('fixed')
			};
		});
	*/

})