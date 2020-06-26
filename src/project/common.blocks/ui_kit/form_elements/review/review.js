
$(document).ready(function () {

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



	$(function () {
		var $reviews = $('.review');
		$reviews.each(function (index, value) {
			var $result = ''
			var $counter = $(this).find('.review__counter')
			//var $counter = $reviews[i].find('.review-header__counter');
			if (!($counter === '0') && ($counter.length > 0)) {
				var $amount = $counter.find('.review__amount')
				var declensions = $counter.data('declensions').split(',')
				var cnt = $counter.data('cnt')
				var $equipmentPhrase = cnt + ' ' + declension(cnt, declensions)

				$result = $equipmentPhrase
				$amount.text($result);
			}
		});
	});


	// выпадающий список review
	$('.review__header').click(function (event) {
		var $this = $(this)
		$this.toggleClass('active').next().slideToggle(500);
		$this.find('.dropdawn-icon').toggleClass("active");
	});
});