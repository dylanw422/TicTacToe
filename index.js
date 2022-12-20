let squareOne = document.querySelector('#square-one')
let squareTwo = document.querySelector('#square-two')
let squareThree = document.querySelector('#square-three')
let squareFour = document.querySelector('#square-four')
let squareFive = document.querySelector('#square-five')
let squareSix = document.querySelector('#square-six')
let squareSeven = document.querySelector('#square-seven')
let squareEight = document.querySelector('#square-eight')
let squareNine = document.querySelector('#square-nine')

let reset = document.querySelector('.reset')
let level = document.querySelector('#difficulty')

let choices = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
let cRemain = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]

let comp;

function checkForWin() {
    if (squareOne.textContent === squareTwo.textContent === squareThree.textContent ||
        squareOne.textContent === squareFive.textContent === squareNine.textContent ||
        squareOne.textContent === squareFour.textContent === squareSeven.textContent ||
        squareTwo.textContent === squareFive.textContent === squareEight.textContent ||
        squareThree.textContent === squareSix.textContent === squareNine.textContent ||
        squareThree.textContent == squareFive.tagName === squareSeven.textContent ||
        squareFour.textContent === squareFive.textContent === squareSix.textContent) {
            alert('GAME OVER!')
        }
}

function EasyComputerPlay() {
    if (cRemain.length <= 1) {
        return
    } else {
        comp = cRemain[Math.floor(Math.random()*cRemain.length)]
        comp.textContent = 'O'
        cRemain = cRemain.filter(choice => choice !== comp)
    }
}

function HardComputerPlay() {
    if (cRemain.length <= 1) {
        return
    } else {
        if (squareFive.textContent === '') {
            comp = squareFive;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === 'X' && squareFive.textContent == 'X' && squareEight.textContent === '') {
            comp = squareEight;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'X' && squareSix.textContent === 'X' && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'X' && squareSeven.textContent === 'X' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'X' && squareEight.textContent === 'X' && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'X' && squareNine.textContent === 'X' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'X' && squareTwo.textContent === 'X' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'X' && squareFour.textContent === 'X' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'X' && squareFive.textContent === 'X' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === 'X' && squareThree.textContent === 'X' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === 'X' && squareSix.textContent === 'X' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X' && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === 'X' && squareSeven.textContent === 'X' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSix.textContent === 'X' && squareNine.textContent === 'X' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSeven.textContent === 'X' && squareEight.textContent === 'X' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareEight.textContent === 'X' && squareNine.textContent === 'X' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else {
            comp = cRemain[Math.floor(Math.random()*cRemain.length)]
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        }
    }
}

for (let i=0; i<choices.length; i++) {
    choices[i].addEventListener('click', () => {
        console.log(level.value)
        if (choices[i].textContent === 'O' || choices[i].textContent === 'X') {
            alert('Spot Used')
        } else if (level.value === 'Easy') {
            choices[i].textContent = 'X'
            cRemain = cRemain.filter(choice => choice !== choices[i]) 
            EasyComputerPlay()
        } else if (level.value === 'Hard') {
            choices[i].textContent = 'X'
            cRemain = cRemain.filter(choice => choice !== choices[i])
            HardComputerPlay()
        }
    })
}

reset.addEventListener('click', () => {
    for (let i=0; i<choices.length; i++) {
        choices[i].textContent = '';
        choices = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
        cRemain = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
    }
})
