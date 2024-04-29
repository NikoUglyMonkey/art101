// index.js - Arrays and Objects
// Author: Niko Nissen
// Date: 4/28/2024

myTransport = ["Nissan Versa", " bike", " bus"];

myMainRide = {
make: "Nissan",
model:"Versa",
year: 2012,
color: "white",

age : function(){
  return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br");

//write object to document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
