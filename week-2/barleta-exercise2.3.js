/*
============================================
; Title:  barleta-exercise2.3
; Author: Professor Krasso
; Date:   8 June 2020
; Modified By: Marie Nicole Barleta
; Description: Defining function properties
;===========================================
*/


// import statement
var header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 2.3 - Defining function properties"));

//function properties
myName.marie = "Marie";
lastName.barleta = "Barleta";
greeting.hello = "Hello";


//function returning name
function myName(){
  return myName.marie;
}

function lastName(){
  return lastName.barleta
}

function greeting(){
  return greeting.hello
}



console.log('\n')
console.log(greeting(), myName(), lastName() +"!");
