/*
============================================
; Title:  barleta-exercise-3.2.js
; Author: Professor Krasso
; Date:   14 June 2020
; Modified By: Marie Nicole Barleta
; Description: Pattern matching functions
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", ""));
console.log("\n")


//variable
var testVar1 = ("Truck")
var testVar2 = ("Car")
var testVar3 = ("Bike")
var testVar4 = ("Bike")
var testVar5 = ("Three")
var testVar6 = ("Four")


//functions
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


//Output from match function
console.log(match("A", "B"))
console.log(match(2,2))

if (match(testVar1, testVar2)){
  logMatch(testVar1,testVar2);
}
  else {
    logMismatch(testVar1, testVar2);
  }

if(match(testVar3, testVar4)){
  logMatch(testVar3, testVar4)
}
  else {
    logMismatch(testVar3, testVar4)
  }

  if(match(testVar5, testVar6)){
    logMatch(testVar5, testVar6)
  }
    else {
      logMismatch(testVar5, testVar6)
    }

