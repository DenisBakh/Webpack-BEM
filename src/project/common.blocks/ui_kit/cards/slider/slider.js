//=====================SLIDER===========================================================//
import '../slider/slick.min.js'

$(document).ready(function () {
	//$(window).load(function () {
	$('.slider').slick({
		//autoplay: true,
		//infinite:false,
		dots: true,
		//arrows:true,
		//accessibility:false,
		//slidesToShow:1,
		autoplaySpeed: 3000,
		speed: 1000
	});
});