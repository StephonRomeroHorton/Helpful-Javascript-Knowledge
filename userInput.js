//How to accept user input

//Easy way with window prompt

let userName = window.prompt("What`s your Name");
console.log(userName);

//Difficult way with HTML textbox
let userInput;

document.getElementById("myButton").onclick = function() {

  userInput = document.getElementById("myText").value;
  console.log(userInput);
  document.getElementById("myLabel").innerHTML = "hello " + userInput;
}