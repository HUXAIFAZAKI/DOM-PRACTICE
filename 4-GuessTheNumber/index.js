let ranNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guesses');
const guessesRemain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;    

if(playGame = true)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }
    else if(guess < 1 )
    {
        alert('Please enter a number more than 1')
    }
    else if(guess > 100 )
    {
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${ranNum}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === ranNum)
    {
        displayMessage(`You Guess it Right!`)
        endGame()
    }
    if(guess < ranNum)
    {
        displayMessage(`Number is too low!`)
    }
    if(guess > ranNum)
    {
        displayMessage(`Number is too high!`)
    }
}

function displayGuess(guess)
{
    userInput.value = ''
    userGuesses.innerHTML += `${guess}, `
    numGuess++
    guessesRemain.innerHTML = `${11-numGuess}`
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame()
{
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click',function(e){
        ranNum = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        userGuesses.innerHTML = ''
        guessesRemain.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}   