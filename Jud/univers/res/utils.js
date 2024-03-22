function qLoadId(id) {
	return document.getElementById(id);
}

function centerVertInParent(el) {
	var Parent=el.parentElement;
	el.style.top =(Parent.clientHeight-el.clientHeight)/2+'px';
}

function centerHorizInParent(el) {
	var Parent=el.parentElement;
	el.style.left=(Parent.clientWidth-el.clientWidth)/2+'px';
}

function centerInParent(el) {
	centerVertInParent(el);
	centerHorizInParent(el);
}

function percent(p,val) {
	return p/100*val;	
}

function accessPage(href) {
	location.href=href;
}