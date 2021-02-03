var rock = document.getElementById("rock")
var sci = document.getElementById("scissors")
var paper = document.getElementById("paper")
var winner = document.getElementById("winner")
var results = document.getElementById("results")
// var gameTotal = document.getElementById("total")
var total = 0
var humanWins = 0
var compWins = 0
var tie = 0

var arr = ["rock", "scissors", "paper"];
var userChoice = ""


rock.addEventListener("click", () => {
    userChoice = "rock"
    var compChoice = Math.floor(Math.random() * arr.length)
    comp = arr[compChoice]
    findWinner(userChoice, comp)
})
sci.addEventListener("click", () => {
    userChoice = "scissors"
    var compChoice = Math.floor(Math.random() * arr.length)
    comp = arr[compChoice]
    findWinner(userChoice, comp)

})
paper.addEventListener("click", () => {
    userChoice = "paper"
    var compChoice = Math.floor(Math.random() * arr.length)
    comp = arr[compChoice]
    findWinner(userChoice, comp)

})
function findWinner(human, comp) {
    if ((human == "rock" && comp == "scissors") || (human == "scissors" && comp == "paper") || (human == "paper" && comp == "rock")) {
        winner.innerHTML = "Human wins !!!"
        humanWins++
        total++
    } else if (human == comp) {
        winner.innerHTML = "Tie !!!"
        tie++
        total++

    } else {
        winner.innerHTML = "Comp wins !!!"
        compWins++
        total++

    }
    results.innerHTML = `
    <h1>Results!:</h1>
    <p>Human wins: ${humanWins}</p>
        <p>Comp wins: ${compWins}</p>
        <p>Tie: ${tie}</p>
        <p>Total Game:${total}</p>
    `
}
