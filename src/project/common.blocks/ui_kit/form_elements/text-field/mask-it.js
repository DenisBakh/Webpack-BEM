import * as $ from 'jquery/'

$(function () {
	$(".text-field__input_date").mask("99.99.9999", { placeholder: "ДД.ММ.ГГГГ" });
});