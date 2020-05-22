$(document).ready(function () {
	$('.spoiler__title').click(function (event) {
		$this = $(this)
		$this.toggleClass('active').next().slideToggle(300);
		$this.find('.dropdawn-icon').toggleClass("active");
		$this.closest('.spoiler').toggleClass("active");
	});

	//Скрытие по клику вне DropDAWM
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var $wrapper = $('.spoiler.active'); // тут указываем класс 
		if (!$wrapper.is(e.target) // если клик был не по нашему блоку
			&& $wrapper.has(e.target).length === 0) { // и не по его дочерним элементам
			DropDawnClose($wrapper)
		}
	});

	function DropDawnClose($wrapper) {
		var $input = $wrapper.find('.spoiler__title')
		var $icon = $wrapper.find('.dropdawn-icon')
		$wrapper.removeClass('active');
		$input.removeClass('active');
		$input.toggleClass('active').next().slideToggle(300);
		$icon.removeClass('active');
	}

});