/*
============================================
; Title:  barleta-exercise-4.3.js
; Author: Professor Krasso
; Date:   20 June 2020
; Modified By: Marie Nicole Barleta
; Description:
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 4.3"));
console.log("\n")


//start program
var vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus']

//function
function getValue(arr, val){
  for (var k=0; k < arr.length; k++){
    if (arr[k] === val)
      console.log(arr[k]);
  }

}

//Output
console.log(" -- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < vehicles.length; x++){
  console.log(vehicles[x])
}

console.log(" ")

console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Motorcycle")

console.log(" ")
console.log(" -- SELECTED VALUE --");
getValue(vehicles, "Bus")
