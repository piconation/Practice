/**
 * Created by mattpowell on 5/12/16.
 */

// JavaScript Document
var currentstring = '';

function sendLetter(theletter) {
    var outputcontdiv = document.getElementById("output");
    currentstring += theletter; // We need to concatenate the strings together.
    checkmyAnswer(currentstring);
    outputcontdiv.innerHTML = currentstring; // I want you to make it print to the page in lower case.

}

function checkmyAnswer(instring) {
    var otheranswer = instring.slice(2).toLowerCase();  // Lets pull another word out of the word we want them to spell.
    if(instring === "STRING"){
        alert("You win! String also contains the word " + otheranswer);
    }
}

var str = "I love Halloween candy";

var patt = /Halloween/i;

var sr = str.search(patt);
alert(sr);


//PROTOTYPES

function vehicle(engineType, color, numberOfDoors,) {
    this.engineType = engineType;
    this.color = color;
    this.numberOfDoors = numberOfDoors;
}

var myVehicle = new car('4cylinder', 'blue', 4);

function truck(engineType, color, numberOfDoors, bedSize, allTerrain) {
    vehicle.call(this, engineType, color, numberOfDoors);
    this.bedSize = bedSize;
    this.allTerrain = allTerrain;
}

truck.prototype = Object.create(vehicle.prototype);
truck.prototype.constructor = truck;

var myMonsterTruck = new truck('8cylinder', 'black', 6, '12\'', true);


function validate() {
    document.forms["address"].preventDefault();
    var minimumLength = 2;
    var street = document.forms["address"]["street"].value;
    if (address == null || address.trim().length < minimumLength) {
        alert("Address must be filled out");
        return false;
    }
    //try address {
        
    }
    //catch errors {



    
    
    
    