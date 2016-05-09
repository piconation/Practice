/**
 * Created by mattpowell on 5/9/16.
 */

function toUpperArrayAsync(array, callback) {
    //modify the listOfStings
    setTimeout(
        function () {
            for (var i = 0; i < array.length; i++)
            {
            
        var sting = listOfStrings[i];

        listOfStrings[i] = string.toUpperCase();
            }

            //let them know it's ready
        callback(listOfStrings);
        },
        5000
    );
}
