// Lab 8: Anon Functions and Callbacks
// Author: Niko Nissen
// Date: 5/2/2024

function addNum(x){
    var results = x + 5;
    return results;
  }
  
  console.log(addNum(6));
  
  var arrayNum = [3,4,5,6,6,7,4,90];
  
  console.log(arrayNum.map(addNum));
  
  var mappedArray = arrayNum.map(function(x){
    var results = x**2;
    return results;
  })
  
  console.log(mappedArray);
  
  var mapResults = arrayNum.map(addNum);
  
  console.log("mapResults: ", mapResults);

function main() {
}

main();
