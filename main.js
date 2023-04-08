let randomNumber = Math.floor(Math.random() * 100)
let tries = 0
console.log(randomNumber)

function checkGuess() {
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tries++

    if (guess == randomNumber) {
        message.innerHTML = 'Parabens voce acertou em ' + tries + ' Tentativas!'
    }
    else if (guess < randomNumber) {
        message.innerHTML = 'Muito baixo, tente um numero maior'
    }
    else {
        message.innerHTML = 'Muito alto, tente um numero menor'
    }
    

}