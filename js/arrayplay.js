/**
 * Created by mattpowell on 5/10/16.
 */

var WRs = ["Antonio", "Julio", "Odell", "Dez"];

document.getElementById("runit").innerHTML = WRs;

function topWRs() {
    WRs.sort();
    document.getElementById("runit").innerHTML = WRs;
}
