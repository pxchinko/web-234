/*
============================================
; Title:  barleta-assignment-3.4.js
; Author: Professor Krasso
; Date:   14 June 2020
; Modified By: Marie Nicole Barleta
; Description: Loops
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Numbers Match Game"));
console.log("\n")

//Start of code

//variable
var number = 7

//match functions
function match(arg1, arg2){
  if (arg1 === arg2){
    return true
  }
  else {
    return false
  }
}
function logMismatch(arg1, arg2){
 console.log(arg1 + " and " + arg2 + " do not match!")
}
function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 +" do match!")
}

//loop random numbers

for (var i=1; i <=10; i++){
  function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }
  var random = randomNumber()
  if (match(number, random)){
    logMatch(number, random)
  }
  else{
    logMismatch(number, random)
  }
}

//End of code
