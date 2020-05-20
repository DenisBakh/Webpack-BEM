import '../datepicker/datepicker.min.js'
$(document).ready(function () {

	/* .text-field__input-icon отвечает за стрелку. Функционал стрелки пришлось разделить 
	в зависимости от типа элемента ввода (простой дропдаун или дата пикер).
	Опредеделяюшим классом для различного поведения стрелок является .datepick
	При наличии его стрелки работают совместно с календарем, завязываются на его появлении и наоборот
	*/


	$('.text-field__input-icon').on('click', function (e) {
		var $this = $(this);
		//console.log($this);
		var $wrapper = $this.closest('.text-field__wrapper');
		var $input = $wrapper.find('.datepick');
		if ($input.length > 0) {
			console.log($this);
			var $isActive = $this.hasClass('active');
			console.log($isActive);
			if (!$isActive) {
				$input.focus()
			} else {
				$wrapper.removeClass("active");
				$wrapper.find('.text-field__input-icon').removeClass("active");
				$wrapper.find('.text-field__input').removeClass("active");
			}
		};
	});

	var dtPicker_1 = $('#date2')
	//var dtPicker_2 = $('#date3')

	dtPicker_1.datepicker({
		range: true,
		multipleDatesSeparator: " - ",
		//multipleDates: true,
		todayButton: true,
		//inline: true,
		clearButton: true,
		//toggleSelected: false,
		onSelect: function onSelect(selectedDates) {
			console.log(selectedDates);
		},
		onShow: function (dp, animationCompleted) { //TOGGLE ACTIVE на DROPDAWN
			if (!animationCompleted) {
				var $wrapper = dtPicker_1.closest('.text-field__wrapper');
				if (!$wrapper.hasClass('active')) {
					$wrapper.addClass("active");
					$wrapper.find('.text-field__input-icon').addClass("active");
					$wrapper.find('.text-field__input').addClass("active");
				}
			} else {
			}
		},
		onHide: function (dp, animationCompleted) { //TOGGLE ACTIVE на DROPDAWN
			if (animationCompleted) {

				var $wrapper = dtPicker_1.closest('.text-field__wrapper');
				//dtPicker_1.find('.text-field__input-icon').trigger('click');
				if ($wrapper.hasClass('active')) {
					$wrapper.removeClass("active");
					$wrapper.find('.text-field__input-icon').removeClass("active");
					$wrapper.find('.text-field__input').removeClass("active");
				}
			} else {
			}
		}

	});



	// Сразу выберем какую-ниудь дату из `eventDates`
	//	var currentDate = currentDate = new Date();
	//	$picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))



});