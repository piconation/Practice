/**
 * Created by mattpowell on 5/18/16.
 */

function divs() {
    var newID = document.getElementsByClassName("skull");

    for (i = 0; i < newID.length; i++) {
        newID [i].setAttribute("id", ("skull" + i));

    }
}

