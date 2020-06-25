import '~/project/common.blocks/ui_kit/cards/common-blocks/room-header/room-header.js'

$(document).ready(function () {
	var billBlock = $(this).find('.bill');
	billBlock.each(function (index) {
		calcBill($(this))
	});


	function numberFormat(_number, _sep) {
		_number = typeof _number != "undefined" && _number >= 0 ? _number.toString() : "";
		_number = _number.replace(new RegExp("^(\\d{" + (_number.length % 3 ? _number.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
		if (typeof _sep != "undefined" && _sep != " ") {
			_number = _number.replace(/\s/g, _sep);
		}
		return _number;
	}



	function calcBill(billBlock) {

		var $this = billBlock
		var $roomCost = $this.find('.room-cost')
		var $roomLong = $this.find('.room-long')
		var $roomCost_allDays = $this.find('.room-cost_alldays')
		var $roomServices = $this.find('.room-services')
		var $roomServices_disc = $this.find('.room-services_discount')
		var $roomServices2 = $this.find('.room-services2')
		var $roomTotal = $this.find('.room-total')

		var $val_formatted = 0

		//цена за день комнаты
		var $roomCost__val = $roomCost.data('cost')
		$val_formatted = numberFormat($roomCost__val, ' ')
		$roomCost.text($val_formatted + '₽ ')

		//количество дней
		var $roomLong__val = $roomLong.text()

		//цена за все дни
		var $roomCost_allDays__val = $roomCost__val * $roomLong__val
		var $val_formatted = numberFormat($roomCost_allDays__val, ' ')
		$roomCost_allDays.text($val_formatted + '₽ ')


		//цена за сервисы1+скидка
		var $roomServices__val = $roomServices.data('roomservices')
		var $roomServices_disc__val = $roomServices_disc.data('roomservicesdisc')
		$val_formatted = numberFormat($roomServices_disc__val, ' ')
		$roomServices_disc.text($val_formatted + '₽ ')

		var $roomServices_disc__val_total = $roomServices__val
		$val_formatted = numberFormat($roomServices_disc__val_total, ' ')
		$roomServices.text($val_formatted + '₽ ')

		//цена за сервисы2
		var $roomServices2__val = $roomServices2.data('roomservices2')
		$val_formatted = numberFormat($roomServices2__val, ' ')
		$roomServices2.text($val_formatted + '₽ ')

		//цена итого
		var $roomTotal__val = Math.max($roomCost_allDays__val + $roomServices2__val + $roomServices_disc__val_total - $roomServices_disc__val, 0)
		$val_formatted = numberFormat($roomTotal__val, ' ')
		$roomTotal.text($val_formatted + '₽ ')
	}

	$('.datepick_spec').on('change', function () {
		var $this = $(this);
		var $dtRange = $this.val();
		var $minDt = $dtRange.substr(0, 10);
		var $maxDt = $dtRange.substr(-10, 10);
		var bookBlock = $this.closest('.book')
		var billBlock = bookBlock.find('.bill')

		if (bookBlock.length > 0) {

			var $dateMin_dd = $minDt.substr(0, 2);
			var $dateMin_mm = $minDt.substr(3, 2);
			var $dateMin_yyyy = $minDt.substr(6, 4);

			var $dateMax_dd = $maxDt.substr(0, 2);
			var $dateMax_mm = $maxDt.substr(3, 2);
			var $dateMax_yyyy = $maxDt.substr(6, 4);

			var $date_min = new Date($dateMin_yyyy, $dateMin_mm, $dateMin_dd);
			var $date_max = new Date($dateMax_yyyy, $dateMax_mm, $dateMax_dd);

			var timeDiff = Math.abs($date_min.getTime() - $date_max.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

			//var $card = $this.closest('.card');
			var $roomLong = billBlock.find('.room-long');
			var $roomLong_name = billBlock.find('.room-long_name');
			if (diffDays === 1) {
				$roomLong_name.text(' ' + 'сутки')
				//var $roomLong_text = diffDays + ' ' + 'сутки'
			} else {
				$roomLong_name.text(' ' + 'суток')
				//var $roomLong_text = diffDays + ' ' + 'суток'
			}
			$roomLong.text(diffDays)
			//$roomLong.attr('data-long', diffDays);

			calcBill(billBlock)
		}
	});
});

