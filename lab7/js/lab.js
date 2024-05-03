// index.js - Functions
// Author: Niko Nissen
// Date: 5/2/2024

//sort userName

function sortUserName(){
  var userName = window.prompt("Hii, tell me your name so I can fix it.");
  console.log("userName =", userName);

//split the string to an array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
//sort the array
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//output
document.writeln("I fixed your name: ",
      sortUserName(), "</br>");

function main() {
  
}

main();
