

$(document).ready(function () {
	var roomHeader = $(this).find('.room-header');

	roomHeader.each(function (index) {

		var item = $(this)
		var _sep = ' ';
		var costPer = item.find('.room-cost');
		var _number = costPer.data('cost');

		cost_formatted = numberFormat(_number, _sep)
		costPer.text(cost_formatted + '₽ ')
	});

	function numberFormat(_number, _sep) {
		_number = typeof _number != "undefined" && _number >= 0 ? _number.toString() : "";
		_number = _number.replace(new RegExp("^(\\d{" + (_number.length % 3 ? _number.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
		if (typeof _sep != "undefined" && _sep != " ") {
			_number = _number.replace(/\s/g, _sep);
		}
		return _number;
	}
});


