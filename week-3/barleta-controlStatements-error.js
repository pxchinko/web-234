/*
============================================
; Title:  controlStatements-error.js
; Author: Marie Nicole Barleta
; Date:   9 June 2020
; Modified By:
; Description: Find the error
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Control Statements Find Errors"));

/*
Expected Output:
      *
     ***
    *****
   *******
  *********

*/

//Start of code

for (i = 1; i <= 5; i++){
  if (i % 2 == 0) console.log("even");
  else console.log("odd");

}


