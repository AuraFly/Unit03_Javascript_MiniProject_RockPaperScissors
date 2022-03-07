var wins = 0;
var losses = 0;
var ties = 0;

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

    if (userChoice === cpuChoice) {
        window.alert("Its a tie! Ill beat you next time");
        ties++;
    } else if (userChoice === "ROCK" && cpuChoice === "PAPER") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
    } else if (userChoice === "ROCK" && cpuChoice === "SCISSORS") {
        window.alert("You won! Impressive for a human!");
        wins++;
    } else if (userChoice === "SCISSORS" && cpuChoice === "ROCK") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
    } else if (userChoice === "SCISSORS" && cpuChoice === "PAPER") {
        window.alert("You won! Impressive for a human!");
        wins++;
    } else if (userChoice === "PAPER" && cpuChoice === "SCISSORS") {
        window.alert("I beat you. Of course, you are only human and I am a great computer!");
        losses++;
    } else if (userChoice === "PAPER" && cpuChoice === "ROCK") {
        window.alert("You won! Impressive for a human!")
        wins++;
    }

    window.alert("Here are your stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var playAgain = window.confirm("Play again?")

    if (playAgain) {
        playGame();}
        else {
            window.alert("Thanks for playing!")
            return;
    }

}

playGame();

