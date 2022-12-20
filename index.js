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
        } else if (squareFive.textContent === squareSix.textContent && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === squareSeven.textContent && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === squareEight.textContent && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === squareNine.textContent && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === squareTwo.textContent && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === squareFour.textContent && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === squareFive.textContent && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === squareFive.textContent && squareEight.textContent === '') {
            comp = squareEight;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === squareThree.textContent && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === squareFive.textContent && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === squareSix.textContent && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === squareFive.textContent && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === squareSeven.textContent && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSix.textContent === squareNine.textContent && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSeven.textContent === squareEight.textContent && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareEight.textContent === squareNine.textContent && squareSeven.textContent === '') {
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
