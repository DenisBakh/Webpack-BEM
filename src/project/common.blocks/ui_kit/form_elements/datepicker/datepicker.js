import '../datepicker/datepicker.min.js'
$(document).ready(function () {

	/* .dropdawn-icon отвечает за стрелку. Функционал стрелки пришлось разделить 
	в зависимости от типа элемента ввода (простой дропдаун или дата пикер).
	Опредеделяюшим классом для различного поведения стрелок является .datepick
	При наличии его стрелки работают совместно с календарем, завязываются на его появлении и наоборот
	*/

	/*

	$('.dropdawn-icon').on('click', function (e) {
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
				$wrapper.find('.dropdawn-icon').removeClass("active");
				$wrapper.find('.text-field__input').removeClass("active");
			}
		};
	});

	*/

	$('.text-field__inout').on('click', function (e) {
		var $this = $(this);
		var $wrapper = $this.closest('.text-field__wrapper');
		var $icon = $wrapper.find('.dropdawn-icon')
		var $parent = $this.closest('.in-out');
		var $input = $parent.find('.datepick_spec');
		if ($input.length > 0) {
			$input.data('datepicker').show()
			$icon.addClass('active')
		};
	});

	$('.dropdawn-icon_apart').on('click', function (e) {
		var $this = $(this);
		var $parent = $this.closest('.in-out');
		if ($parent.length > 0) {
			var $input = $parent.find('.datepick');
			if (!$this.hasClass('active')) {
				$input.data('datepicker').show()
				$this.addClass("active");
			} else {
				$input.data('datepicker').hide()
				$this.removeClass("active");
			}
		}
	});

	$('.datepick_spec').on('change', function () {
		// If a date is picked from the datepicker and not manually put in, then this event will not fire.
		console.log('Input value changed.');
		var first = $(this).datepicker('getDate').val();


		var first = $(this).datepicker('maxDate');
		console.log(first);

	});


	var dtPicker = $('.datepick')
	$.each(dtPicker, function () {
		var $this = $(this)

		$(this).datepicker({
			range: $this.attr('data-range'),
			dateFormat: $this.attr('data-dateFormat'),
			multipleDatesSeparator: " - ",
			//multipleDates: true,
			//todayButton: true,
			acceptButton: true,
			//inline: true,
			clearButton: true,
			//toggleSelected: false,
			onSelect: function (date) {
				alert(date);
				console.log(2321)
			},
			navTitles: {
				days: 'MM <i>yyyy</i>',
				months: 'yyyy',
				years: 'yyyy1 - yyyy2'
			},
			// If a date is picked from the datepicker and not manually put in, then this event will not fire. DECISION
			onSelect: function (formattedDate, date, inst) {
				$(inst.el).trigger('change');
			},
			/*
			onShow: function (dp, animationCompleted) { //TOGGLE ACTIVE на DROPDAWN
				if (!animationCompleted) {
					var $wrapper = $this.closest('.text-field__wrapper');
					if (!$wrapper.hasClass('active')) {
						$wrapper.addClass("active");
						$wrapper.find('.dropdawn-icon').addClass("active");
						$wrapper.find('.text-field__input').addClass("active");
					}
				}
			},
			*/
			onHide: function (dp, animationCompleted) { //TOGGLE ACTIVE на DROPDAWN
				if (animationCompleted) {
					var $parent = $this.closest('.in-out');
					if ($parent.length > 0) {
						var $wrapper = $parent.find('.text-field__wrapper');
						var $icon = $parent.find('.dropdawn-icon');
						$wrapper.removeClass('active');
						$icon.removeClass('active');
					} else {
						var $wrapper = $this.closest('.text-field__wrapper');
						var $icon = $wrapper.find('.dropdawn-icon');
						$wrapper.removeClass('active');
						$icon.removeClass('active');
					}
				}
			}
		});
	});

	//var dtPickers = $('.datepick_spec')
	//dtPickers.data('datepicker').show()


	var dtExample = $('#datePick-example')

	dtExample.datepicker({
		range: true,
		multipleDatesSeparator: " - ",
		//multipleDates: true,
		//todayButton: true,
		acceptButton: true,
		inline: true,
		clearButton: true,
		//toggleSelected: false,
		navTitles: {
			days: 'MM <i>yyyy</i>',
			months: 'yyyy',
			years: 'yyyy1 - yyyy2'
		}
	});

	// Сразу выберем какую-ниудь дату из `eventDates`
	//	var currentDate = currentDate = new Date();
	//	$picker.data('datepicker').selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 10))



});