/*
   lab.js - Lab 13 - Loops
   Author: Niko Nissen
   Date: 5/26/2024

   3 Fizz
   5 Buzz
   7 Boom
   loop through numbers, listing them as you go.
   If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. 
   For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
   Make it so the output of your program appears in your output div.
*/

for (let i = 1; i <= 200; i++){
   let str = ""
   if (i % 3 == 0 ){
     str+= "Fizz";
   }
   if (i % 5 == 0){
     str+= "Buzz";
   }
   if (i % 7 == 0){
     str+= "Boom";
   }
   $("#output").append("<p>" + i + ": "+ str + "</p>");
 }

