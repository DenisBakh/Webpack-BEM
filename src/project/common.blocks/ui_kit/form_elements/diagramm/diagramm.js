
$(document).ready(function () {
	var canvases = document.querySelectorAll('.canvas');

	canvases.forEach(function (item, value) {
		var $canvas = $(item)

		//var captionsList = $canvas.find('.caption-item');
		//var unitsList = $canvas.find('.chart__unit');
		let captionsList = item.querySelectorAll('.caption-item');
		let unitsList = item.querySelectorAll('.chart__unit');

		var $captionList = $canvas.find('.caption-list')

		var $totalSize = $captionList.data('total');
		//Определяем и записываем параметр stroke-width
		var $strokeWidth = $captionList.data('strokewidth');
		var $unitCommon = $canvas.find('.chart__unit')
		$unitCommon.css({
			'stroke-width': $strokeWidth
		});

		var $strokeDashoffset = 0
		var $summOtrezkov = 0

		var xss = 0

		let unitsList_real = item.querySelectorAll('.chart__unit_real');

		captionsList.forEach(function (item, index) {
			item.addEventListener('mouseover', function () {
				if (!(unitsList_real[index] === 'undefined')) {
					console.log(unitsList_real[index])
					unitsList_real[index].classList.add('hovered');
				}
			});

			item.addEventListener('mouseout', function () {
				unitsList_real[index].classList.remove('hovered');
			});


		});


		unitsList.forEach(function (item, index) {
			var $unit = $(item)
			//Определяем каждой секции минус пробел между ними: 1% от общей длины окружости
			var $unitSize = $unit.data('cnt')
			if ($unitSize < 0) {
				$unitSize = 0
			}
			var $strokeDasharray = $unitSize + ' ' + $totalSize

			$strokeDashoffset = $summOtrezkov + $unitSize * 2 //Смещяем элемент на 2 своих длины (одна длина для смещения, другая - для резервировании места)
			$summOtrezkov = $summOtrezkov + $unitSize   //Дополнительное смещение на сумму предыдущих длин отрезков

			$unit.css({
				'stroke-dasharray': $strokeDasharray,
				//Смещаем каждую секцию и дополнительно смещаем на сумму предыдущих пробелов: 1%*количество секций которые прошли от общей длины окружости
				//'stroke-dashoffset': ($strokeDashoffset - 0.01 * $totalSize * index) + 1 / 4 * $totalSize
				'stroke-dashoffset': ($strokeDashoffset)
			})
			//Смещаем каждую секцию 
			//$strokeDashoffset = $strokeDashoffset + parseInt($unitSize)

			/*
			Попытка увеличить stroke-width при hover - не получается, увеличиваются все юниты, а не конкретный
			$unit.hover(function () { // задаем функцию при наведении курсора на элемент	
				$unitCommon.css({
					'stroke-width': $strokeWidth * 1.5
				});
			});
			*/

		});




		/*
				
		
				unitsList.forEach(function (item, value) {
					var $item = $(item)
					var x = $item.data('cnt')
					console.log(x)
					$item.css('stroke-dasharray', '8 100')
				});
				*/
	});

});
