/*
============================================
; Title:  barleta-assignment-4.4.js
; Author: Professor Krasso
; Date:   20 June 2020
; Modified By: Marie Nicole Barleta
; Description:
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Assignment 4.4"));
console.log("\n")


//start program
//Create a string array of 5 states.
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada']

/*
- Create a function called getState with two string parameters.

- In the body of the getState function add an
if statement to test if the two string parameters match. If they match, return true

- Using JavaScript's built-in filter() function, call the getState function and pass-in
the current element of the filter loop and the value to find
 (see page 154 of the courses textbook).
*/
function getState(arr, filterVal){
  //for (var k=0; k < arr.length; k++){
    return (arr === filterVal)
  //}
}
//Output
//Display the contents of the original array
console.log(" -- ORIGINAL ARRAY --");
states.forEach(state => console.log(state));

//Sort and display the contents of the updated array
console.log("\n")
console.log(" -- SORTED ARRAY --");
states.sort().forEach(state => console.log(state))


//Display the selected value
//Filter function included
console.log("\n")
console.log(" -- SELECTED VALUE --");
console.log(
  states.filter
  (
  function (arr) {
    return getState(arr, "Iowa")
  }
)[0]
);


