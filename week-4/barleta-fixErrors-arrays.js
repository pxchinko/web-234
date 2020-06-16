/*
============================================
; Title:  barleta-exercise-3.3.js
; Author: Marie Nicole Barleta
; Date:   15 June 2020
; Modified By:
; Description: Fix multiple errors
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Fix Multiple Errors"));
console.log("\n")

/*
expected output:
2 bananas
*/

//start program
//variable

var arr = [
  ['apple', 'mango', 'banana'],
  ['carrots', 'potato', 'spinach'],
  ['pasta', 'rice', 'beans']
]

//This block of code has multiple errors
for (banana=3; banana <= 7; banana=+){
  if (banana > 1){
    console.log(banana + " " + arr[2][0]+"s")
  }
  else {
    console.log(banana + " " + arr[][])
  }

}


//end program

