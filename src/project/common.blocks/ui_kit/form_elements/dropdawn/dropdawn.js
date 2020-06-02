$(document).ready(function ($) {
	// FOR QUANTITY
	$('.counter__minus').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $minus = $this
		var $plus = $this.closest('.counter').find('.counter__plus')
		var $input = $this.closest('.counter').find('.counter__cnt');
		var value = parseInt($input.val());
		if (value > 0) {
			value = value - 1;
		} else {
			value = 0;
		}
		$input.val(value);
		PlusMinusBtn($input)
		rules($input)
		DropDownOnChange($input)
	});

	$('.counter__plus').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $plus = $this
		var $minus = $this.closest('.counter').find('.counter__minus')
		var $input = $this.closest('.counter').find('.counter__cnt');
		var value = parseInt($input.val());
		if (value < 100) {
			value = value + 1;
		} else {
			value = 100;
		}
		$input.val(value);
		PlusMinusBtn($input)
		rules($input)
		DropDownOnChange($input)
	});

	function rules($input) {
		//if ($input.is('#bedrooms') || $input.is('#beds')) {
		if ($input.hasClass('bedrooms') || $input.hasClass('beds')) {
			var $wrapper = $input.closest('.text-field__wrapper')
			var $bedrooms = $wrapper.find('.bedrooms')
			var $beds = $wrapper.find('.beds')

			var $counter = $beds.closest('.counter')
			var $minus = $counter.find('.counter__minus')

			if (parseInt($beds.val()) <= parseInt($bedrooms.val())) {
				$beds.val($bedrooms.val())
				$minus.removeClass("counter__btn_active")
			} else {
				$minus.addClass("counter__btn_active")
			}
			//PlusMinusBtn($beds)
		}
		//if ($input.is('#children') || $input.is('#babies') || $input.is('#adults')) {
		if ($input.hasClass('children') || $input.hasClass('babies') || $input.hasClass('adults')) {
			var $wrapper = $input.closest('.text-field__wrapper')
			var $adults = $wrapper.find('.adults')
			var $children = $wrapper.find('.children')
			var $babies = $wrapper.find('.babies')

			var $counter = $adults.closest('.counter')
			var $minus = $counter.find('.counter__minus')

			if (((parseInt($children.val()) > 0) || (parseInt($babies.val()) > 0)) && (parseInt($adults.val()) <= 1)) {
				$adults.val('1')
				$minus.removeClass("counter__btn_active")
			}
			if (((parseInt($children.val()) === 0) && (parseInt($babies.val()) === 0)) && (parseInt($adults.val()) === 1)) {
				$minus.addClass("counter__btn_active")
			}
			//PlusMinusBtn($beds)
		}
	};

	function PlusMinusBtn($input) {
		var $counter = $input.closest('.counter')
		var $cntVal = parseInt($counter.find('.counter__cnt').val())

		var $minus = $counter.find('.counter__minus')
		var $plus = $counter.find('.counter__plus')

		if ((!$minus.hasClass("counter__btn_active")) && ($cntVal > 0)) {
			$minus.addClass("counter__btn_active")
		}
		if (($minus.hasClass("counter__btn_active")) && ($cntVal === 0)) {
			$minus.removeClass("counter__btn_active")
		}

		if ((!$plus.hasClass("counter__btn_active")) && ($cntVal < 100)) {
			$plus.addClass("counter__btn_active")
		}
		if (($plus.hasClass("counter__btn_active")) && ($cntVal === 100)) {
			$plus.removeClass("counter__btn_active")
		}
	};

	function DropDownOnChange($input) {
		var $this = $input;
		var $wrapper = $this.closest('.text-field__wrapper');
		var $textfield = $wrapper.find('.text-field__input');
		var $counters = $wrapper.find('.counter__cnt');
		var $clear = $wrapper.find('.dropdawn-field__clear');
		$clearButton = false

		//
		if ($this.closest('.dropdawn-field').hasClass('dropdawn-field_count-apart')) {
			var $result = ''
			var $phrase = []

			$.each($counters, function (i) {
				var $equipmentCnt = $counters[i].value;
				if (!($equipmentCnt === '0')) {
					var declensions = $counters[i].getAttribute('data-declensions').split(',')
					var $equipmentPhrase = $equipmentCnt + ' ' + declension($equipmentCnt, declensions)
					$phrase.push($equipmentPhrase)

					if (!$clearButton) {
						$clearButton = true
					}
				}
			});

			$.each($phrase, function (i) {
				$result = $result + $phrase[i] + ', '
			});

			if (!($result === '')) {
				$result = $result.substring(0, $result.length - 2)
				$textfield.text($result);
			} else {
				$textfield.text($textfield[0].getAttribute('data-valueDefault'));
			}

		} else {
			var $cnt = 0;
			$.each($counters, function (i, value) {
				$cnt = $cnt + parseInt($counters[i].value);
				//console.log('Индекс: ' + index + '; Значение: ' + parseInt($(this).val()));
			});
			if ($cnt > 0) {
				var declensions = $counters[0].getAttribute('data-declensions').split(',')
				$textfield.text($cnt + ' ' + declension($cnt, declensions));

				if (!$clearButton) {
					$clearButton = true
				}
			} else {
				$textfield.text($textfield[0].getAttribute('data-valueDefault'));
			}
		}

		//Кнопка очистить
		if ($clearButton && !($clear.hasClass('active'))) {
			$clear.addClass('active')
		}

		if (!$clearButton) {
			$clear.removeClass('active')
		}
	};




	$('.dropdawn-field__clear').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.removeClass('active')
		var $input = $this.closest('.text-field__wrapper').find('.counter__cnt');
		var $minus = $this.closest('.text-field__wrapper').find('.counter__minus');
		var $plus = $this.closest('.text-field__wrapper').find('.counter__plus');
		var $textfield = $this.closest('.text-field__wrapper').find('.text-field__input');
		$input.val(0);

		$minus.removeClass('counter__btn_active')
		$plus.addClass('counter__btn_active')

		$textfield.text($textfield[0].getAttribute('data-valueDefault'))
	});




	$('.dropdawn-field__accept').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $wrapper = $this.closest('.text-field__wrapper');
		var $textfield = $wrapper.find('.text-field__input');

		DropDawnClose($wrapper)
		/*
		if ($this.closest('.dropdawn-field').hasClass('dropdawn-field_count-apart')) {
			var $counters = $wrapper.find('.counter__cnt')
			var $result = ''
			var $phrase = []
	
			$.each($counters, function (i) {
				var $equipmentCnt = $counters[i].value;
				if (!($equipmentCnt === '0')) {
					var declensions = $counters[i].getAttribute('data-declensions').split(',')
					var $equipmentPhrase = $equipmentCnt + ' ' + declension($equipmentCnt, declensions)
					$phrase.push($equipmentPhrase)
				}
			});
	
			$.each($phrase, function (i) {
				$result = $result + $phrase[i] + ', '
			});
			$result = $result.substring(0, $result.length - 2)
			$textfield.text($result);
	
		} else {
			var $input = $this.closest('.text-field__wrapper').find('.counter__cnt')
			var $cnt = 0;
			$.each($input, function (index, value) {
				$cnt = $cnt + parseInt($(this).val());
				//console.log('Индекс: ' + index + '; Значение: ' + parseInt($(this).val()));
			});
			if ($cnt > 0) {
				$textfield.text($cnt + ' ' + declension($cnt, ['гость', 'гостя', 'гостей']));
			} else {
				$textfield.text('Сколько гостей');
			}
		}
		*/
	});

	function declension(num, expressions) {
		var result;
		var count = parseInt(num) % 100;
		if (count >= 5 && count <= 20) {
			result = expressions['2'];
		} else {
			count = count % 10;
			if (count == 1) {
				result = expressions['0'];
			} else if (count >= 2 && count <= 4) {
				result = expressions['1'];
			} else {
				result = expressions['2'];
			}
		}
		return result;
	};

	/* .dropdawn-icon отвечает за стрелку. Функционал стрелки пришлось разделить 
	в зависимости от типа элемента ввода (простой дропдаун или дата пикер).
	Опредеделяюшим классом для различного поведения стрелок является .datepick
	При наличии его стрелки работают совместно с календарем, завязываются на его появлении и наоборот
	*/
	//TOGGLE ACTIVE на DROPDAWN
	$('.text-field__wrapper').on('click', function (e) {
		var isDatePick = $(this).children(".datepick").length > 0
		if (!isDatePick) {
			var $wrapper = $(this);
			var div = $wrapper.find('.dropdawn-field');
			if (!div.is(e.target) && (div.has(e.target).length === 0)) {  // если клик был не по нашему блоку
				e.preventDefault();
				//var $this = $(this);
				//var $dd = $this.closest('.text-field__wrapper');
				$wrapper.toggleClass("active");
				$wrapper.find('.dropdawn-field').toggleClass("active");
				$wrapper.find('.dropdawn-icon').toggleClass("active");
				$wrapper.find('.text-field__input').toggleClass("active");
			}
		}
	});

	//Скрытие по клику вне DropDAWM
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var $wrapper = $(".text-field__wrapper.active"); // тут указываем класс 
		var isDatePick = $wrapper.children(".datepick").length > 0
		if (!isDatePick) {
			if (!$wrapper.is(e.target) // если клик был не по нашему блоку
				&& $wrapper.has(e.target).length === 0) { // и не по его дочерним элементам
				DropDawnClose($wrapper)
			}
		}
	});

	function DropDawnClose($wrapper) {
		var $input = $wrapper.find('.text-field__input')
		var $icon = $wrapper.find('.dropdawn-icon')
		var $dd = $wrapper.find('.dropdawn-field')

		$wrapper.removeClass('active');
		$input.removeClass('active');
		$dd.removeClass('active');
		$icon.removeClass('active');
	}
});




/*

function declension(num, expressions) {
	var result;
	var count = num % 100;
	if (count >= 5 && count <= 20) {
		result = expressions['2'];
	} else {
		count = count % 10;
		if (count == 1) {
			result = expressions['0'];
		} else if (count >= 2 && count <= 4) {
			result = expressions['1'];
		} else {
			result = expressions['2'];
		}
	}
	return result;
};

//alert(declension(1, ['пользователь', 'пользователя', 'пользователей']));
*/

