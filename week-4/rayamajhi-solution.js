/*
============================================
; Title:  Discussion Board 4.1 - Arrays
; Author: Anil Rayamajhi
; Date:   19 June 2020
; Modified by: Marie Nicole Barleta
; Description: JavaScript program with three errors
;===========================================
*/

/*
Deliverable:
[2, 4, 6, 8]
*/

/*
My Solution:
Properly declared Array constructor into Array(10)
*/

//  Declare array
// Set size to numArray
//  HINT: https://github.com/buwebdev/web-231/blob/master/week-4/arrays-and-operators.js
const numArray = new Array(10);
payload = [];

/**
 * Description: loop to accumulate even number in payload array
 * HINT: '%' operator
 */

 /*
My Solution:
Changed / into % for mod operator to identify even numbers
and changed .add to .push to push the value of index to payload
 */

for (let index = 1; index < numArray.length; index++) {
  if (index % 2 === 0) {
    // push index to payload
    payload.push(index);
  }

}

//output
console.log(payload);
