/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 7 Jun 2020
; Modified By: Nicole Barleta
; Description: This program demonstrates the
; declaration of 3 employee records and the
; use of JavaScript decimal format
; and applying date slashes format
;===========================================
*/

// First employee record
var emp1_firstName = "Nicole";
var emp1_lastName = "Barleta";
var emp1_address = "Champaign, IL";
// Fix pay rate into 1 decimal
var emp1_payRate = 9.8950;
emp1_payRate.toFixed(1);
// Hire date slashes format
var emp1_dateStr = "2020/05/31";
var emp1_hireDate = new Date(emp1_dateStr);
var dayDate = emp1_hireDate.getDate();
var monthDate = emp1_hireDate.getMonth();
var yearDate = emp1_hireDate.getFullYear();
var emp1_date = ( monthDate+"\\"+ dayDate +"\\"+ yearDate)

console.log("----------------------------")
console.log("Employee #1")
console.log("First Name: " +emp1_firstName)
console.log("Last Name: " +emp1_lastName)
console.log("Address: " +emp1_address)
console.log("Pay Rate: " +emp1_payRate)
console.log("Hire Date: " +emp1_date)
console.log("----------------------------")

// Second employee record
var emp2_firstName = "Alex";
var emp2_lastName = "Resendiz";
var emp2_address = "Chicago, IL";
// Fix pay rate into 1 decimal
var emp2_payRate = 25.7540;
emp1_payRate.toFixed(1);
// Hire date slashes format
var emp2_dateStr = "2017/03/22";
var emp2_hireDate = new Date(emp2_dateStr);
var dayDate = emp2_hireDate.getDate();
var monthDate = emp2_hireDate.getMonth();
var yearDate = emp2_hireDate.getFullYear();
var emp2_date = ( monthDate+"\\"+ dayDate +"\\"+ yearDate)

console.log("Employee #2")
console.log("First Name: " +emp2_firstName)
console.log("Last Name: " +emp2_lastName)
console.log("Address: " +emp2_address)
console.log("Pay Rate: " +emp2_payRate)
console.log("Hire Date: " +emp2_date)
console.log("----------------------------")

// Third employee record
var emp3_firstName = "Marisol";
var emp3_lastName = "Obispo";
var emp3_address = "Urbana, IL";
// Fix pay rate into 1 decimal
var emp3_payRate = 17.9754;
emp1_payRate.toFixed(1);
// Hire date slashes format
var emp3_dateStr = "2010/07/07";
var emp3_hireDate = new Date(emp3_dateStr);
var dayDate = emp3_hireDate.getDate();
var monthDate = emp3_hireDate.getMonth();
var yearDate = emp3_hireDate.getFullYear();
var emp3_date = ( monthDate+"\\"+ dayDate +"\\"+ yearDate)

console.log("Employee #3")
console.log("First Name: " +emp3_firstName)
console.log("Last Name: " +emp3_lastName)
console.log("Address: " +emp3_address)
console.log("Pay Rate: " +emp3_payRate)
console.log("Hire Date: " +emp3_date)
console.log("----------------------------")

