/*
============================================
; Title:  Discussion 4.1
; Author: Juvenal Gonzalez
; Date:   17 June 2020
; Modified By: Marie Nicole Barleta
; Description: Create a JavaScript program with array objects that contain two errors.
;===========================================
*/
//Syntax error
/*
My Solution: Fixed the "Money" to be declared as a string properly
*/
a = [0,10,"Money"];
//fix undefined output
/*
My Solution: Changed the continuation condition into 2 instead of 4
*/
for(i=0; i<2; i++)
  console.log(a[i])

delete a[0];
/*
My Solution: Changed index into [2]
*/
 console.log(a[2]);//change index to output something that is not undefined
