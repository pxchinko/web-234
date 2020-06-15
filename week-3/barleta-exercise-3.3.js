/*
============================================
; Title:  barleta-exercise-3.3.js
; Author: Professor Krasso
; Date:   14 June 2020
; Modified By: Marie Nicole Barleta
; Description: Control Statements
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", ""));
console.log("\n")


//variable
var eventKeycode = 13;

switch (eventKeycode){
  case 13:
    console.log("The enter key was pressed")
    break;
  case 16:
    console.log("The shift key was pressed")
    break;
  case 32:
    console.log("The spacebar key was pressed")
    break;
  case 8:
    console.log("The backspace/delete key was pressed")
    break;
  default:
    console.log("Unrecognized key press")
}

//end program
