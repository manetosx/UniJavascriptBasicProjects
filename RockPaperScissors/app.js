const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice // access globally
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const buttonIds = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * buttonIds.length)
    const buttonId = buttonIds[randomNumber]
    computerChoice = document.getElementById(buttonId).textContent
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    const outcomes = {
    'Rock': {'Scissors': 'Computer Wins!!', 'Paper': 'Human Wins!!'},
    'Scissors': {'Rock': 'Human Wins!!', 'Paper': 'Computer Wins!!'},
    'Paper': {'Rock': 'Computer Wins!!', 'Scissors': 'Human Wins!!'}
    }
    const outcome = outcomes[computerChoice][userChoice]
    result = outcome ? outcome : 'Draw!!'
    resultDisplay.innerHTML = result
}