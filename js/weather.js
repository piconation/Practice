/**
 * Created by mattpowell on 5/24/16.
 */


function getinfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var myobj = JSON.parse(xhttp.responseText);
            document.getElementById("mycooldiv").innerHTML = "The weather is currently: " + myobj.weather[0].description + " and " + myobj.main.temp + " degrees.";
            
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=40&lon=-111&appid=8bf0a2141aefa89f4d290c8e92ea2857", true);
    xhttp.send();
}

