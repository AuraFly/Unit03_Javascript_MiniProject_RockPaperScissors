var wins = 0;
var losses = 0;
var ties = 0;
var pRock = 0;
var pPaper = 0;
var pScis = 0;
var cRock = 0;
var cPaper = 0;
var cScis = 0;


var options = ["Rock", "Paper", "Scissors"]

function playGame() {
    var userChoice = window.prompt("Enter your selection - Rock, Paper, or Scissors:");
    if (!userChoice) {
        alert("Thanks for playing!")
    return;
    }

    userChoice = userChoice.toUpperCase();

    var initCPUChoice = Math.floor(Math.random()*options.length);
    var cpuChoice = options[initCPUChoice];

    cpuChoice = cpuChoice.toUpperCase();

    window.alert("The computer's choice is " + cpuChoice);

    if (userChoice === "ROCK" && cpuChoice === "ROCK") {
        window.alert("Its a tie! Ill beat you next time");
        ties++;
        pRock++;
        cRock++;
    } else if (userChoice === "SCISSORS" && cpuChoice === "SCISSORS") {
        window.alert("Its a tie! Ill beat you next time");
        ties++;
        pScis++;
        cScis++;
    } else if (userChoice === "PAPER" && cpuChoice === "PAPER") {
        window.alert("Its a tie! Ill beat you next time");
        ties++;
        pPaper++;
        cPaper++;
    } else if (userChoice === "ROCK" && cpuChoice === "PAPER") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
        pRock++;
        cPaper++;
    } else if (userChoice === "ROCK" && cpuChoice === "SCISSORS") {
        window.alert("You won! Impressive for a human!");
        wins++;
        pRock++;
        cScis++;
    } else if (userChoice === "SCISSORS" && cpuChoice === "ROCK") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
        pScis++;
        cRock++;
    } else if (userChoice === "SCISSORS" && cpuChoice === "PAPER") {
        window.alert("You won! Impressive for a human!");
        wins++;
        pScis++;
        cPaper++;
    } else if (userChoice === "PAPER" && cpuChoice === "SCISSORS") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
        pPaper++;
        cScis++;
    } else if (userChoice === "PAPER" && cpuChoice === "ROCK") {
        window.alert("You won! Impressive for a human!")
        wins++;
        pPaper++;
        cRock++;
    }

    window.alert("Here are your stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
     + "\n\nYour choices so far:\nRock: " + pRock + "\nPaper: " + pPaper + "\nScissors: " + pScis
     + "\n\nThe Computer's choices so far:\nRock: " + cRock + "\nPaper: " + cPaper + "\nScissors: " + cScis);

    var playAgain = window.confirm("Play again?")

    if (playAgain) {
        playGame();}
        else {
            window.alert("Thanks for playing!")
            return;
    }
}

playGame();