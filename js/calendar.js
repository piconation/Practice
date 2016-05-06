/**
 * Created by mattpowell on 5/6/16.
 */

//----------CALENDAR------------


function runmycode() {

    var d = new Date().getDay();

    switch (d) {
        case 0:
            document.getElementById("dayoftheweek").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("dayoftheweek").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("dayoftheweek").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("dayoftheweek").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("dayoftheweek").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("dayoftheweek").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("dayoftheweek").innerHTML = "Saturday";
            break;
    }
}
