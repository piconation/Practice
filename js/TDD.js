/**
 * Created by mattpowell on 5/26/16.
 */

function receive(mynumber) {
    if(mynumber >= 1 && mynumber <= 20) {
        return true;
    }
    else {
        return false;
    }
}
console.log(receive(5));
console.log(receive(42));



function stringy(mystring) {
    if(mystring.length >= 5) {
        return true;
    }
    else {
        return false;
    }
}
//enter a value that is 5 characters
console.log(stringy("so"));
//enter a value that is not 5 characters
console.log(stringy("shorten"));