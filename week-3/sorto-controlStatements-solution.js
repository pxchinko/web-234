/*

============================================

; Title:  Discussion Board 3.1 - Control Statements

; Author: Arlix Sorto

; Date:   6/14/2020

;Modified By: Marie Nicole Barleta

; Description: A program with a couple of errors.

;===========================================

*/

//FIXME: Should output my number.

var number = 0;

console.log("My number is.." );

number = getNumber();

// Validate the number and then outputs number.

/*
My Solution:
Changed the validation if number is equal to 5 then print number
(Got rid of typeof operator since it is validating a string "integer")
*/

if(number == 5) {

console.log(number);

}

// Returns a number.

/*
Changed the increment in the proper way, i++
*/
function getNumber(){

var i = 0;

while(i < 5){

i++;
}

return i;

}
