

var elements = document.querySelectorAll('[data-stretch]');
Array.prototype.forEach.call(elements, function(el, i){
	el.style.backgroundImage = 'url(' + el.getAttribute('data-stretch') + ')';
});