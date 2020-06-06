/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 31 May 2020
; Modified By: Nicole Barleta
; Description: This program demonstrates the
; use of JavaScript decimal and date slashes
;===========================================
*/

var firstName = "Nicole";
var lastName = "Barleta";
var address = "Champaign, IL";
var payRate = 9.500;
var dateStr = "2020/05/31"
var hireDate = new Date(dateStr);

var dayDate = hireDate.getDate();
var monthDate = hireDate.getMonth();
var yearDate = hireDate.getFullYear();
var date = ( monthDate+"\\"+ dayDate +"\\"+ yearDate)

payRate.toFixed(1);


console.log(+payRate)
console.log(date)
