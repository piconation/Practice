// JavaScript Document



var pumpkinpatch = "";
var numpumpkins = 0;
var gametitle = "Pumpkin Game";
document.getElementById("title").innerHTML = gametitle;

function addPumpkin(event) {
	numpumpkins++;
	xAdjust = 10;
	yAdjust = 10;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	document.getElementById("numbertitle").innerHTML = numpumpkins;

}







// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});