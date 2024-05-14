function onClick(){
  console.log("Hello");
  let name = prompt("whats your name?");
  $('#title').html('Hello ' + name)
}

$("my-button").click(onClick)

$("my-button").click(function(){
  console.log("click");
})
