/*
============================================
; Title:  barleta-exercise2.3
; Author: Professor Krasso
; Date:   8 June 2020
; Modified By: Marie Nicole Barleta
; Description: Creating and calling functions
;===========================================
*/


// import statement
var header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Assignment 2.4"));


function fullName(firstName, lastName){
var firstName = "Marie"
var lastName = "Barleta"
return "Hello my name is " +firstName +" "+lastName+ "!";
}

function dateWriter(year, month, day){
today = new Date().toLocaleDateString('en-US');
  return today
}

function formatNumber(number, numOfFixedPositions){
  var numOfFixedPositions = 1
  var number = 33.6;
  return number.toFixed(numOfFixedPositions)
}

function convertToInt(n){
  var n = parseInt("27")
  return n
}

function convertToFloat(x){
  var x = parseFloat("5000000.75")
  return x
}
console.log('\n')
console.log(fullName() + '\n')
console.log('Today\'s date is '+dateWriter()+ " and the current temperature is " +formatNumber()+" degrees")
console.log('I am '+convertToInt()+ ' years old and my savings account goal is  '+convertToFloat()+ ' dollars')
