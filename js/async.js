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

// calls your function back with the modified array function toUpperArrayAsync(listOfStrings, callback) {
// modify the listOfStrings setTimeout( function() {
for(var i = 0; i < listOfStrings.length; i++) { var string = listOfStrings[i];
    listOfStrings[i] = string.toUpperCase(); }
// let them know it is ready callback(listOfStrings);
}, 2000
);
}
// calls your function back with the modified array function sortArrayAsync(listOfStrings, callback) {
// modify the listOfStrings setTimeout( function() {
listOfStrings.sort();
// let them know it is ready callback(listOfStrings);
}, 2000
);
}
// calls your function back with the modified array function firstCharArrayAsync(listOfStrings, callback) {
// modify the listOfStrings setTimeout( function() {
for(var i = 0; i < myList.length; i++) { var string = myList[i];
    myList[i] = string.charAt(0); } // let them know it is ready callback(listOfStrings);
}, 2000
);
} var myList = ['cat', 'dog', 'rat', 'bunny']; document.getElementById('myOtherId').addEventListener('click', function (event)
{
    for(var i = 0; i < myList.length; i++)

    {
        var string = myList[i]; myList[i] = string.charAt(0);
    } document.getElementById('myId').innerHTML = myList.toString();
}); var myCallBack = function (anyArray) {
    document.getElementById('myId').innerHTML = anyArray.toString(); sortArrayAsync(anyArray, myNextCallBack);
}; var myNextCallBack = function(newArray) {
    document.getElementById('myYetOtherId').innerHTML = newArray.toString(); firstCharArrayAsync(newArray, myLastCallBack);
}; var myLastCallBack = function(otherArray) {
    document.getElementById('myYetOtherId').innerHTML = otherArray.toString();
};
document.getElementById('myId').innerHTML = myList.toString(); document.getElementById('myOtherId').innerHTML = 'keeps running'; document.getElementById('myYetOtherId').innerHTML = 'keeps running more';
toUpperArrayAsync(myList, function (anyArray) { document.getElementById('myId').innerHTML = anyArray.toString();
    sortArrayAsync(anyArray, function(newArray) {
        document.getElementById('myYetOtherId').innerHTML =
            newArray.toString();
        firstCharArrayAsync(newArray, function(otherArray) {
            document.getElementById('myYetOtherId').innerHTML =
                otherArray.toString(); });
    });
}); console.log(myList);
var thisPromiseCount = 0;
// We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s) var promise = new Promise( // The resolver function is called with the ability to resolve or
// reject the promise function(resolve, reject) {
console.log('before the promise resolves'); // This is only an example to create asynchronism window.setTimeout(
function() {
// We fulfill the promise ! var notSure = false; if (notSure) {
    reject({message: 'things went wrong'});
} resolve(['tweet', 'tweet1', 'tweet2', 'tweet3']);
}, Math.random() * 2000 + 1000);

} );
var onSuccess = function (data) {
    document.getElementById('myPromiseId').innerHTML = data.toString();
}; var onError = function(error) {
    document.getElementById('myPromiseId').innerHTML = error.message;
};
promise.then(onSuccess, onError);
var onSuccessAgain = function (data) {
    document.getElementById('myPromiseId2').innerHTML = data[0];
}; promise.then(onSuccessAgain);
var onException = function (error) { console.log(error.message); };
promise.catch(onException);
var onAllSuccesses = function (allData) { var firstPromiseData = allData[0]; };
var onAnyError = function (firstError) { console.log(firstError.message); };
Promise.all([promise, promise1]).then(onAllSuccesses, onAnyError);

