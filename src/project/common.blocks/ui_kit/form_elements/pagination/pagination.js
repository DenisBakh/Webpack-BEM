import '../pagination/jquery.simplePagination.js'

$(document).ready(function () {
	$(function () {
		var $this = $('#pagination-main');
		$this.pagination({
			items: 176,
			itemsOnPage: 12,
			cssStyle: 'light-theme',
			displayedPages: 3,
			edges: 1,
			prevText: '',
			nextText: 'next',
			ellipsePageSet: false,
		});

		//Обновляем общее количество элементов на страницах
		var $pagination = $this.closest('.pagination')
		var $pagination__total = $pagination.find('.pagination__total-items')
		var $items__total = $this.pagination('getItems')
		$pagination__total.text(Math.trunc($items__total / 100) * 100 + '+ ')

	});


	//Обновляем общее количество элементов на страницах
	$(document).on('click', '.page-link', function (e) {

		var $this = $('#pagination-main');
		var $pagination = $this.closest('.pagination')
		var $items__total = $this.pagination('getItems')

		var $items__view = $this.pagination('getItemsOnPage')
		var $currentPage = $this.pagination('getCurrentPage')
		var $pagination__view = $pagination.find('.pagination__current-items')
		var $view__start = 1 + ($items__view * ($currentPage - 1))
		var $view__end = $items__view * $currentPage
		if ($view__end * 1 > $items__total * 1) {
			$view__end = $items__total
		}
		$pagination__view.text($view__start + ' - ' + $view__end + ' ')

	});



});

