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
let corners = [squareOne, squareThree, squareSeven, squareNine]

let comp;

let checkForWin = (squareOne.textContent === squareTwo.textContent === squareThree.textContent ||
        squareOne.textContent === squareFive.textContent === squareNine.textContent ||
        squareOne.textContent === squareFour.textContent === squareSeven.textContent ||
        squareTwo.textContent === squareFive.textContent === squareEight.textContent ||
        squareThree.textContent === squareSix.textContent === squareNine.textContent ||
        squareThree.textContent == squareFive.tagName === squareSeven.textContent ||
        squareFour.textContent === squareFive.textContent === squareSix.textContent ||
        squareSeven.textContent === squareEight.textContent === squareNine.textContent)

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
        } else if (squareOne.textContent === 'X' && squareSeven.textContent === 'X' && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'X' && squareThree.textContent === 'X' && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'X' && squareThree.textContent === 'X' && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'X' && squareSeven.textContent === 'X' && squareEight.textContent === '') {
            comp = squareEight;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else {
            comp = cRemain[Math.floor(Math.random()*cRemain.length)]
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        }
    }
}

function ImpossibleComputerPlay() {
    if (cRemain.length <= 1) {
        return        
    } else {
        if (squareFive.textContent === '') {
            comp = squareFive;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === '' && squareThree.textContent === '' && squareSeven.textContent === '' && squareNine.textContent === '') {
            comp = corners[Math.floor(Math.random()*corners.length)]
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === 'O' && squareFive.textContent == 'O' && squareEight.textContent === '') { //Check For O's
            comp = squareEight;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'O' && squareSix.textContent === 'O' && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'O' && squareSeven.textContent === 'O' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'O' && squareEight.textContent === 'O' && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFive.textContent === 'O' && squareNine.textContent === 'O' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'O' && squareTwo.textContent === 'O' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'O' && squareFour.textContent === 'O' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'O' && squareFive.textContent === 'O' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === 'O' && squareThree.textContent === 'O' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === 'O' && squareFive.textContent === 'O' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareThree.textContent === 'O' && squareSix.textContent === 'O' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === 'O' && squareFive.textContent === 'O' && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareFour.textContent === 'O' && squareSeven.textContent === 'O' && squareOne.textContent === '') {
            comp = squareOne;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSix.textContent === 'O' && squareNine.textContent === 'O' && squareThree.textContent === '') {
            comp = squareThree;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareSeven.textContent === 'O' && squareEight.textContent === 'O' && squareNine.textContent === '') {
            comp = squareNine;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareEight.textContent === 'O' && squareNine.textContent === 'O' && squareSeven.textContent === '') {
            comp = squareSeven;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'O' && squareSeven.textContent === 'O' && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'O' && squareThree.textContent === 'O' && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'O' && squareThree.textContent === 'O' && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'O' && squareSeven.textContent === 'O' && squareEight.textContent === '') {
            comp = squareEight;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareTwo.textContent === 'X' && squareFive.textContent == 'X' && squareEight.textContent === '') { //Check For X's
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
        } else if (squareOne.textContent === 'X' && squareSeven.textContent === 'X' && squareFour.textContent === '') {
            comp = squareFour;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareOne.textContent === 'X' && squareThree.textContent === 'X' && squareTwo.textContent === '') {
            comp = squareTwo;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'X' && squareThree.textContent === 'X' && squareSix.textContent === '') {
            comp = squareSix;
            comp.textContent = 'O'
            cRemain = cRemain.filter(choice => choice !== comp)
        } else if (squareNine.textContent === 'X' && squareSeven.textContent === 'X' && squareEight.textContent === '') {
            comp = squareEight;
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
        } else if (level.value === 'Impossible') {
            choices[i].textContent = 'X'
            cRemain = cRemain.filter(choice => choice !== choices[i])
            ImpossibleComputerPlay()
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
