let a;
let b;
let c;
/*
a = window.prompt("Enter Side A");
a = Number(a);

b = window.prompt("Enter Side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
console.log("Side C ", c);*/

document.getElementById("submitButton").onclick = function () {

  a = document.getElementById("aTextbox").value;
  a = Number(a);

  b =  document.getElementById("bTextbox").value;
  b = Number(b);

  c = Math.pow(a, 2) + Math.pow(b, 2);
  c = Math.sqrt(c);

  document.getElementById("cLabel").innerHTML = "Side C: " + c;


}