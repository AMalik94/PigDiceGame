// Pig game 

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

document.querySelector('#score-0').textContent = '0'

var x = document.querySelector("#score-0").textContent

document.querySelector('.dice').style.display = 'none'

document.querySelector('.btn-roll').addEventListener('click', function(){

    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src ='dice-' + dice + '.png'



})
