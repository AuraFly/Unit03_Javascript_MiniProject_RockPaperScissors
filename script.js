var wins = 0;
var losses = 0;
var ties = 0;

function userInput () {
var userChoices = ["Rock", "Paper", "Scissors"];
}

function comp () {
    var computerChoice = userChoices[Math.floor(Math.random()*userChoices.length)];
    return option
}
function choiceComparison(x,y) {
    x = userChoices;
    y = computerChoices;
    if (x === y) {
        alert("Its a tie! Ill beat you next time");
        console.log(++ties);
    } else if ( x === userChoices[0] && y === computerChoices) {
        alert("I beat you. Of course, you are only human and I am a great computer!");
        console.log(++losses);
    } else if (x === userChoices[0] && y === choices[2]) {
        alert("You won! Impressive for a human!");
        console.log(++wins);
    } else if ( x === userChoices[1] && y === choices[2]) {
        alert("I beat you. Of course, you are only human and I am a great computer!");
        console.log(++losses);
    } else if (x === userChoices[1] && y === choices[0]) {
        alert("You won! Impressive for a human!");
        console.log(++wins);
    } else if ( x === userChoices[2] && y === choices[0]) {
        alert("I beat you. Of course, you are only human and I am a great computer!");
        console.log(++losses);
    } else if (x === userChoices[2] && y === choices[1]) {
        alert("You won! Impressive for a human!")
        console.log(++wins);
})

prompt("Type Rock, Paper, or Scissors")