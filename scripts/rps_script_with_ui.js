let win_count = 0;
let loss_count = 0;

function computerPlay() {
    let rng = Math.random();
    if(rng < .33){
        return "rock";
    } else if(rng < .66){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let response = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        response = "You Lose. Paper beats Rock.";
        loss_count++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        response = "You Win! Rock beats Scissors.";
        win_count++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        response = "You Win! Paper beats Rock.";
        win_count++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        response = "You Lose. Scissors beats Paper.";
        loss_count++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        response = "You Lose. Rock beats Scissors.";
        loss_count++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        response = "You Win! Scissors beats Paper.";
        win_count++;
    } else {
        response = "You Tied. You guys both used " + playerSelection;
    }
    return response;
}

const screen = document.querySelector('body');

const scoreKeeper = document.createElement('div');

const win_counter = document.createElement('h1');
const loss_counter = document.createElement('h1');
win_counter.innerText = "Amount of Wins: " + win_count;
loss_counter.innerText = "Amount of Losses: " + loss_count;

function showResult(playerSelection) {
    alert(playRound(playerSelection,computerPlay()));
    win_counter.innerText = "Amount of Wins: " + win_count;
    loss_counter.innerText = "Amount of Losses: " + loss_count;
    if(win_count == 5){
        alert("YOU WIN!");
    } else if (loss_count == 5) {
        alert("YOU LOSE");
    }
}

let rock = document.querySelector("#rock");
rock.addEventListener('click', () => showResult('rock'));
let paper = document.querySelector("#paper");
paper.addEventListener('click', () => showResult('paper'));
let scissor = document.querySelector("#scissor");
scissor.addEventListener('click', () => showResult('scissors'));

scoreKeeper.appendChild(win_counter);
scoreKeeper.appendChild(loss_counter);
screen.appendChild(scoreKeeper);
