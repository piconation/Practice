/**
 * Created by mattpowell on 5/20/16.
 */

var teetime = 30;
var seconds = 60;

function beginTimer(){
    var thetimer = setInterval(function(){clocktick()}, 1000);
}

function clocktick(){
    if(seconds > 0){
        seconds--;
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        else {
            teetime--;
            seconds = 59;
        }
        console.log
        document.getElementById("countdown").innerHTML = teetime + ":" + seconds;
    }
}