import '../pagination/jquery.simplePagination.js'

//$(document).ready(function () {
$(window).on('load', function () {

	//Обновляем общее количество элементов на страницах
	$(document).on('click', '.page-link', function (e) {
		var $this = $('#pagination-main');
		//скролим наверх
		pagination_parameters($this);
		scroll_top();
	});

	function scroll_top() {
		var scroll_point = $('#scroll-here');
		if (scroll_point.length > 0) {
			var headerFixed = $('.header_fixed')
			if (headerFixed.length > 0) {
				var headerHeight = $('.header_fixed').innerHeight()
				var $top = scroll_point.offset().top - headerHeight; // получаем координаты блока
			}
			else {
				var $top = scroll_point.offset().top; // получаем координаты блока
			}
			$('body, html').animate({ scrollTop: $top }, 800); // плавно переходим к блоку
		}
	};


	function pagination_parameters($this) {
		var $pagination = $this.closest('.pagination')
		var $items__total = $this.pagination('getItems')
		var $pagination__total = $pagination.find('.pagination__total-items')
		$pagination__total.text(Math.trunc($items__total / 10) * 10 + '+ ')

		var $items__view = $this.pagination('getItemsOnPage')
		var $currentPage = $this.pagination('getCurrentPage')
		var $pagination__view = $pagination.find('.pagination__current-items')
		var $view__start = 1 + ($items__view * ($currentPage - 1))
		var $view__end = $items__view * $currentPage
		if ($view__end * 1 > $items__total * 1) {
			$view__end = $items__total
		}
		$pagination__view.text($view__start + ' - ' + $view__end + ' ')
	};

	$(function () {
		var $this = $('#pagination-main');

		// Consider adding an ID to your table
		// incase a second table ever enters the picture.
		var items = $(".pagination-item");
		var numItems = items.length;
		var perPage = 12;
		// Only show the first 2 (or first `per_page`) items initially.
		items.slice(perPage).hide();

		// Now setup the pagination using the `.pagination-page` div.
		$this.pagination({
			items: numItems,
			itemsOnPage: perPage,
			cssStyle: 'light-theme',
			displayedPages: 3,
			edges: 1,
			prevText: '',
			nextText: 'next',
			ellipsePageSet: false,

			// This is the actual page changing functionality.
			onPageClick: function (pageNumber) {
				// We need to show and hide `tr`s appropriately.
				var showFrom = perPage * (pageNumber - 1);
				var showTo = showFrom + perPage;
				// We'll first hide everything...
				items.hide()
					// ... and then only show the appropriate rows.
					.slice(showFrom, showTo).show();
			}
		});

		//определяем общее количество элементов и выводим в текст
		pagination_parameters($this);
		// EDIT: Let's cover URL fragments (i.e. #page-3 in the URL).
		// More thoroughly explained (including the regular expression) in:
		// https://github.com/bilalakil/bin/tree/master/simplepagination/page-fragment/index.html

		// We'll create a function to check the URL fragment
		// and trigger a change of page accordingly.
		function checkFragment() {
			// If there's no hash, treat it like page 1.
			var hash = window.location.hash || "#page-1";

			// We'll use a regular expression to check the hash string.
			hash = hash.match(/^#page-(\d+)$/);

			if (hash) {
				// The `selectPage` function is described in the documentation.
				// We've captured the page number in a regex group: `(\d+)`.
				$this.pagination("selectPage", parseInt(hash[1]));
			}
		};

		// We'll call this function whenever back/forward is pressed...
		$(window).bind("popstate", checkFragment);

		// ... and we'll also call it when the page has loaded
		// (which is right now).
		checkFragment();
	});

});

