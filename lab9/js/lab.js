/* 
lab.js: Libraries & jQuery - simple js/jquery script that uses buttons to modify page elements
Author: Niko Nissen
Date: 5/12/2024
*/

  //add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click Here!</button>");
//add a click listener to the challenge button
$("#button-challenge").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

//add button to problems section
$("#problems").append("<button id='button-problems'>Click Here!</button>");
//add a click listener to the problems button
$("#button-problems").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

//add button to results section
$("#results").append("<button id='button-results'>Click here!</button>");
//add a click listener to the results button
$("#button-results").click(function(){
    //now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
