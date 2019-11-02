const coinSide = ["Heads", "Tails"];
let score = [0,0]; //index 0 Player's score, 1 computer's score
const message = document.querySelector(".message");
const button = document.querySelectorAll("button");
const computerPicked = document.querySelector(".computerToss");

for(let i=0; i<button.length; i++){
    button[i].addEventListener("click", tossCoin);
}

function tossCoin(e){
    let playerGuess = e.target.innerHTML;
    let tossComputer = Math.floor(Math.random()*2);
    let computerGuess = coinSide[tossComputer];
    computerPicked.innerHTML = `<h2>Computer has pick: ${coinSide[tossComputer]}</h2>`;
    let outputMessage = "";
    if(playerGuess === computerGuess){
        //Increase player score
        outputMessage = "Player is the winner!"
        score[0]++;
    }else{
        //Increase computer score
        outputMessage = "Computer is the winner!"
        score[1]++;
    }
    message.innerHTML = `<h1>${outputMessage} <br>Player: ${score[0]} vs Computer: ${score[1]} </h1>`;
}