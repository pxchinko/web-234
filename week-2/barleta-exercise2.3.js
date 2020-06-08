/*
============================================
; Title:  barleta-exercise2.3
; Author: Professor Krasso
; Date:   8 June 2020
; Modified By: Marie Nicole Barleta
; Description: Test for a formatted header
;===========================================
*/


// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 2.3"));

console.log('\n');
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

myName.marie = "Marie";
lastName.barleta = "Barleta!";
greeting.hello = "Hello";
console.log(greeting(), myName(), lastName());
