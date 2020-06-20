/*
============================================
; Title:  barleta-exercise-4.2.js
; Author: Professor Krasso
; Date:   19 June 2020
; Modified By: Marie Nicole Barleta
; Description: 1 dimensional array of 5 fruit elements
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 4.2"));
console.log("\n")

//start code
var fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

//function
function getFruit(arr){
for (var k=0; k < arr.length; k++){
console.log(arr[k])
}
}

getFruit(fruits);

