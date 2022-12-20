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

let easyChoice = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
let hardChoice = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
let hardChoiceFilter = []
let hardChoicePick;

let choice = document.querySelector('#difficulty')
let compChoice; 

let difficulty = choice.options[choice.selectedIndex].value
console.log(difficulty)

choice.addEventListener('click',() => {
    difficulty = choice.options[choice.selectedIndex].value
    console.log(difficulty)
})

squareOne.addEventListener('click', () => {
    console.log(squareOne.id)
    if (squareOne.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareOne.textContent="X"   
        easyChoice = easyChoice.filter(choice => choice !== squareOne)
    }
    switch (difficulty) {
        case 'Easy':
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
                console.log(easyChoice)
                setTimeout(() => {
                    compChoice.textContent = 'O'
                }, 1000)
            break;
        case 'Hard':
            if (squareOne.textContent === 'X' && squareTwo.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else if (squareOne.textContent === 'X' && squareFour === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else if (squareOne.textContent === 'X' && squareFive === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareTwo.addEventListener('click', () => {
    console.log(squareTwo.id)
    if (squareTwo.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareTwo.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareTwo)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareOne.textContent === 'X' && squareTwo.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else if (squareTwo.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareEight.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareEight)
                }, 500)
            } else if (squareThree.textContent === 'X' && squareTwo.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareThree.addEventListener('click', () => {
    console.log(squareThree.id)
    if (squareThree.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareThree.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareThree)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareTwo.textContent === 'X' && squareThree.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else if (squareThree.textContent === 'X' && squareSix.textContent === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareFour.addEventListener('click', () => {
    console.log(squareFour.id)
    if (squareFour.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareFour.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareFour)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareOne.textContent === 'X' && squareFour.textContent === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else if (squareFour.textContent === 'X' && squareSeven.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareSix.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSix)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareFive.addEventListener('click', () => {
    console.log(squareFive.id)
    if (squareFive.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareFive.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareFive)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareOne.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else if (squareTwo.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareEight.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareEight)
                }, 500)
            } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareSix.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSix)
                }, 500)
            } else if (squareFive.textContent === 'X' && squareSix.textContent === 'X') {
                setTimeout(() => {
                    squareFour.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareFour)
                }, 500)
            } else if (squareSeven.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else if (squareEight.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareTwo.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareTwo)
                }, 500)
            } else if (squareNine.textContent === 'X' && squareFive.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareSix.addEventListener('click', () => {
    console.log(squareSix.id)
    if (squareSix.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareSix.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareSix)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareThree.textContent === 'X' && squareSix.textContent === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else if (squareFive.textContent === 'X' && squareSix.textContent === 'X') {
                setTimeout(() => {
                    squareFour.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareFour)
                }, 500)
            } else if (squareSix.textContent === 'X' && squareNine.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }

})

squareSeven.addEventListener('click', () => {
    console.log(squareSeven.id)
    if (squareSeven.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareSeven.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareSeven)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareFour.textContent === 'X' && squareSeven.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else if (squareFive.textContent === 'X' && squareSeven.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else if (squareSeven.textContent === 'X' && squareEight.textContent === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

squareEight.addEventListener('click', () => {
    console.log(squareEight.id)
    if (squareEight.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareEight.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareEight)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareSeven.textContent === 'X' && squareEight.textContent === 'X') {
                setTimeout(() => {
                    squareNine.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareNine)
                }, 500)
            } else if (squareFive.textContent === 'X' && squareEight.textContent === 'X') {
                setTimeout(() => {
                    squareTwo.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareTwo)
                }, 500)
            } else if (squareEight.textContent === 'X' && squareNine.textContent === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
        }
})

squareNine.addEventListener('click', () => {
    console.log(squareNine.id)
    if (squareNine.textContent === 'O') {
        alert('This spot is already used')
    } else {
        squareNine.textContent = 'X'
        easyChoice = easyChoice.filter(choice => choice !== squareNine)
        console.log(easyChoice)
    }
    switch (difficulty) {
        case 'Easy':
            compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
            easyChoice = easyChoice.filter(choice => choice !== compChoice)
            console.log(easyChoice)
            setTimeout(() => {
                compChoice.textContent = 'O'
            }, 1000)
            break;
        case 'Hard':
            if (squareSix.textContent === 'X' && squareNine.textContent === 'X') {
                setTimeout(() => {
                    squareThree.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareThree)
                }, 500)
            } else if (squareFive.textContent === 'X' && squareNine.textContent === 'X') {
                setTimeout(() => {
                    squareOne.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareOne)
                }, 500)
            } else if (squareEight.textContent === 'X' && squareNine.textContent === 'X') {
                setTimeout(() => {
                    squareSeven.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== squareSeven)
                }, 500)
            } else {
                setTimeout(() => {
                    compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                    compChoice.textContent = 'O'
                    easyChoice = easyChoice.filter(choice => choice !== compChoice)
                }, 500)
            }
    }
})

function cleanBoard() {
    easyChoice = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
    for (let i=0; i<easyChoice.length; i++) {
            easyChoice[i].textContent = ''
    }
}

for (let i = 0; i<easyChoice.length; i++) {
    easyChoice[i].addEventListener('click', () => {
        let xWins = (squareOne.textContent === 'X' && squareTwo.textContent === 'X' && squareThree.textContent === 'X' || squareOne.textContent === 'X' && squareFive.textContent === 'X' && squareNine.textContent === 'X' || 
        squareOne.textContent === 'X' && squareFour.textContent === 'X' && squareSeven.textContent === 'X' || squareTwo.textContent === 'X' && squareFive.textContent === 'X' && squareEight.textContent === 'X' ||
        squareThree.textContent === 'X' && squareSix.textContent === 'X' && squareNine.textContent === 'X' || squareThree.textContent === 'X' && squareFive.textContent === 'X' && squareSeven.textContent === 'X' ||
        squareFour.textContent === 'X' && squareFive.textContent === 'X' && squareSix.textContent === 'X' || squareSeven.textContent === 'X' && squareEight.textContent === 'X' && squareNine.textContent === 'X')
        console.log('xWins = ' + xWins)

        if (xWins) {
            xThree = true;
            setTimeout(() => {
                cleanBoard()
                xWins = false
                setTimeout(() => {
                    alert('You WIN!')
                }, 100)
            }, 500)
        }
    })
}

reset.addEventListener('click', () => {
    cleanBoard()
})