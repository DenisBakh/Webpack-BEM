import '../pagination/jquery.simplePagination.js'

$(document).ready(function () {
	$(function () {
		var $this = $('#pagination-demo2');
		$this.pagination({
			items: 180,
			itemsOnPage: 12,
			cssStyle: 'light-theme',
			displayedPages: 3,
			edges: 1,
			prevText: '',
			nextText: 'next',
			ellipsePageSet: false,
		});
		console.log($('#pagination-demo2').pagination('getItems'));


		var $pagination = $this.closest('.pagination')
		var $pagination__total = $pagination.find('.pagination__total-items')
		var $items__total = $this.pagination('getItems')
		$pagination__total.text(Math.trunc($items__total / 100) * 100 + '+ ')

	});



	$('.page-link').on('click', function (e) {


		var $this = $('#pagination-demo2');

		console.log(1)
		var $items__view = $this.pagination('getItemsOnPage')
		var $currentPage = $this.pagination('getCurrentPage')
		var $pagination__view = $pagination.find('.pagination__current-items')
		var $view__start = 1 + ($items__view * ($currentPage - 1))
		var $view__end = $items__view * $currentPage
		$pagination__view.text($view__start + ' - ' + $view__end)

	});



});

