var MenuHover=false;

setInterval(update,1);
function update() {
	var p=document.body.scrollTop*100/window.innerHeight;
	if(p>50 || MenuHover) {
		qLoadId("Menu").style.opacity=1;
		qLoadId("Footer").style.opacity=(p-50)/50;
	}
	else {
		qLoadId("Menu").style.opacity=p/50;
		qLoadId("Footer").style.opacity=0;
	}
}

window.onresize=function() {
	qLoadId("Title").style.fontSize=percent(5,qLoadId("Head").clientWidth);
	centerInParent(qLoadId("Title"));
}

window.onload=function() {
	onresize();
}