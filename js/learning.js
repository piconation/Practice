/**
 * Created by mattpowell on 4/25/16.
 */

//circle
var radius = 100;
var pi = Math.PI
var circum = 2 * pi * radius;

//triangle
var side1 = 34;
var side2 = 45;
var side3 = 45;
var triangle = side1 + side2 + side3

//square
var length = 34;
var square = length * 4

//gravity
var mass = 67;
var planet = 'earth';

//earth gravity
var earthGrav = 9.8

//moon gravity
var moonGrav = 1.622

//jupiter gravity
var jupiterGrav = 24.79

planet = planet.toLowerCase()

var result;

if (planet === 'earth') {
    result = earthGrav * mass;
}

else if(planet === 'moon') {
    result = moonGrav * mass;
}

else {
    result = jupiterGrav * mass;
}

// 4-27-16

var row1 = [2, 4, 6];
var row2 = [2, 4, 6];
var row3 = [2, 4, 6];

function matrixMultiply (matrix1, matrix2) {

    //result matrix

    var resultMatrix = [[], []]

    return resultMatrix;

    //matrix schema

    var row1 = [1, 2];
    var row2 = [1, 2];


    var matrix = [row1, row2];

    //multiply matrix

    resultMatrix[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[1][0]);
    resultMatrix[0][1] = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1] * matrix2[1][1]);
    resultMatrix[1][0] = (matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1] * matrix2[1][0]);
    resultMatrix[1][1] = (matrix1[1][0] * matrix2[0][1]) + (matrix1[1][1] * matrix2[1][1]);

    //return matrix
}


