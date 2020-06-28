/*
     ============================================

     ; Title: discussion 5.1
     ; Author: Tiffany Baker
     ; Date: 6/27/2020
     ; Modified By: Marie Nicole Barleta
     ; Description: This program demonstrates the
     ; use of arrays with 2 errors.
     ;===========================================

     */






     //Array creation


     let newA = new Map();






     //maps 2 categories

/*

My solution:

1. Added comma in the apple fruits set, to declare the set properly
2. changed newa into newA cause the set is declared as newA and JavaScript is case sensitive

*/


     newA.set ("apple","fruits");
     newA.set ("kiwi","fruits");
     newA.set ("corn","veggies");
     newA.set ("green bean","veggies");




     //grabs and shows fruits.




     for (let[key,value] of newA )
     { if
      (value === "fruits")
      {
      console.log(key);
     //outputs apple and kiwi.
         }






     }
