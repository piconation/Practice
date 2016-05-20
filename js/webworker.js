/**
 * Created by mattpowell on 5/20/16.
 */

var w;

function startWorker() {
    if(typeof (Worker) !== "undefined") {
        if(typeof (w) == "undefined") {
            w = new Worker("../js/demoworker.js");
        }
        
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
        };
        
    }
    
    else{
        document.getElementById("result").innerHTML = "Sorry, IE sucks. Use a real browser.";
    }
    
}

function stopWorker() {
    w.terminate();
    w = undefined;
}