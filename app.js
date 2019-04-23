// Pig game 

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

var dice = Math.floor(Math.random() * 7);

document.querySelector("current-0").textContent = dice