/* 
lab.js: Libraries & jQuery - simple js/jquery script that uses buttons to modify page elements
Author: Niko Nissen
Date: 5/12/2024
*/

//add a button to the challenge section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
  $("#challenge").click(function(){
  //add or subtract the special class to the section
  $("#challenge").toggleClass("special");
});
