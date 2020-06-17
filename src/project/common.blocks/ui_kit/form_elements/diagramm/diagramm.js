
$(document).ready(function () {
	var canvases = document.querySelectorAll('.canvas');

	canvases.forEach(function (item, value) {
		var $canvas = $(item)

		//var captionsList = $canvas.find('.caption-item');
		//var unitsList = $canvas.find('.unit');
		let captionsList = item.querySelectorAll('.caption-item');
		let unitsList = item.querySelectorAll('.unit');

		var $totalSize = $canvas.find('.caption-list').data('total');
		var $strokeDashoffset = 0

		captionsList.forEach(function (item, index) {
			item.addEventListener('mouseover', function () {
				unitsList[index].classList.add('hovered');
			});

			item.addEventListener('mouseout', function () {
				unitsList[index].classList.remove('hovered');
			});

			var $unit = $(unitsList[index])
			var $unitSize = $unit.data('cnt')
			var $strokeDasharray = $unitSize + ' ' + $totalSize
			$unit.css({
				'stroke-dasharray': $strokeDasharray,
				'stroke-dashoffset': String($strokeDashoffset)
			})
			$strokeDashoffset = $strokeDashoffset + parseInt($unitSize)
			console.log($strokeDashoffset)
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