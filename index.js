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
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else if (squareOne.textContent === 'X' && squareFour === 'X') {
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else if (squareOne.textContent === 'X' && squareFive === 'X') {
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else if (squareTwo.textContent === 'X' && squareFive.textContent === 'X') {
                squareEight.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareEight)
            } else if (squareThree.textContent === 'X' && squareTwo.textContent === 'X') {
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else if (squareThree.textContent === 'X' && squareSix.textContent === 'X') {
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X') {
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else if (squareFour.textContent === 'X' && squareSeven.textContent === 'X') {
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X') {
                squareSix.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSix)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else if (squareTwo.textContent === 'X' && squareFive.textContent === 'X') {
                squareEight.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareEight)
            } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X') {
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X') {
                squareSix.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSix)
            } else if (squareFive.textContent === 'X' && squareSix.textContent === 'X') {
                squareFour.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareFour)
            } else if (squareSeven.textContent === 'X' && squareFive.textContent === 'X') {
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else if (squareEight.textContent === 'X' && squareFive.textContent === 'X') {
                squareTwo.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareTwo)
            } else if (squareNine.textContent === 'X' && squareFive.textContent === 'X') {
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else if (squareFive.textContent === 'X' && squareSix.textContent === 'X') {
                squareFour.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareFour)
            } else if (squareSix.textContent === 'X' && squareNine.textContent === 'X') {
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else if (squareFive.textContent === 'X' && squareSeven.textContent === 'X') {
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else if (squareSeven.textContent === 'X' && squareEight.textContent === 'X') {
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareNine.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareNine)
            } else if (squareFive.textContent === 'X' && squareEight.textContent === 'X') {
                squareTwo.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareTwo)
            } else if (squareEight.textContent === 'X' && squareNine.textContent === 'X') {
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
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
                squareThree.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareThree)
            } else if (squareFive.textContent === 'X' && squareNine.textContent === 'X') {
                squareOne.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareOne)
            } else if (squareEight.textContent === 'X' && squareNine.textContent === 'X') {
                squareSeven.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== squareSeven)
            } else {
                compChoice = easyChoice[Math.floor(Math.random()*easyChoice.length)]
                compChoice.textContent = 'O'
                easyChoice = easyChoice.filter(choice => choice !== compChoice)
            }
    }
})

for (let i = 0; i<easyChoice.length; i++) {
    easyChoice[i].addEventListener('click', () => {
        if (squareOne.textContent === 'X' && squareTwo.textContent === 'X' && squareThree.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')    
            })
        } else if (squareOne.textContent === 'X' && squareFive.textContent === 'X' && squareNine.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareOne.textContent === 'X' && squareFour.textContent === 'X' && squareSeven.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareTwo.textContent === 'X' && squareFive.textContent === 'X' && squareEight.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareThree.textContent === 'X' && squareSix.textContent === 'X' && squareNine.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareThree.textContent === 'X' && squareFive.textContent === 'X' && squareSeven.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareFour.textContent === 'X' && squareFive.textContent === 'X' && squareSix.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        } else if (squareSeven.textContent === 'X' && squareEight.textContent === 'X' && squareNine.textContent === 'X') {
            setTimeout(() => {
                alert('You WIN!')
            })
        }
    })
}

reset.addEventListener('click', () => {
    easyChoice = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine]
    for (let i=0; i<easyChoice.length; i++) {
        easyChoice[i].textContent = ''
    }
})