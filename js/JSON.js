/**
 * Created by mattpowell on 5/24/16.
 */

function stuff() {
    var about = '{"name":"Matt Powell", "street":"Avenida de las Rosas 2911, Guadalajara, Jalisco, 44530, Mexico"}';

    var obj = JSON.parse(about);

    document.getElementById("intro").innerHTML = obj.name + " lives at " + obj.street;
}
