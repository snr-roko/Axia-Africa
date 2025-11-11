alert("**** Welcome To The Guessing Land ****")

// assignment operator
let winningNumber = Math.floor(Math.random() * 10)

while (true) {
    const guessedContent = prompt("Enter your lucky number between 0 and 10 inclusive")

    if (guessedContent.toLowerCase() === "quit") {
        alert("**** Game Over ****")
        break
    }

    let guessedNumber = parseInt(guessedContent)


    // comparison operator used here to check if guessed number is equal to winning number
    if (guessedNumber === winningNumber) {
        alert("Congratulations, Game Clear")
        break
    }

    // use of comparison operator
    if (guessedNumber < winningNumber) {
        if (winningNumber !== 10) {
            // use of arithmetic operator
            winningNumber ++
        }
        alert("You guessed lower, Try again or type 'quit' to exit")
    } else {
        if (winningNumber !== 0) {
            winningNumber --
        }
        alert("You guessed upper, Try again or type 'quit' to exit")
    }

    // use of comparison and logical operator
    if ((guessedNumber < 0) || (guessedNumber > 10)) {
        alert("But what were you thinking, I said between 0 and 10 inclusive... Well; Your choice")
    }


}