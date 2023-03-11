"use strict";

// generating random nubmer
let secretNumber = Math.trunc(Math.random()*20) + 1;

// managing score
let score = 20;
let currentHighscore = 0;

//displaying new message
function newMessage (message){
    document.querySelector(".message").textContent = message;
}

//displaying new header
function newHeader (header){
    document.querySelector(".header").textContent = header;
}

// displaying new background color
function newBackgroundColor (color){
    document.querySelector("body").style.backgroundColor = color;
}

// displaying new width 
function newWidth (width){
    document.querySelector(".number").style.width = width;
}

// displaying new score
function newScore (score){
    document.querySelector(".score").textContent = score;
}

// displaying new number content
function newNumber(number){
    document.querySelector(".number").textContent = number;
}

// click event
document.querySelector(".check").addEventListener("click", () => {

    //storing the users guess 
    const guess = Number (document.querySelector(".guess").value);
    console.log( guess, typeof guess);

    // no input scenerio
    if (!guess){
        newMessage("No number entered!");
    }

    // input is too high or too low or a decimal number
    else if ((guess - Math.floor(guess))!==0 || guess < 1 || guess > 20) {
        newMessage("Guess needs to be between 1 and 20 or a whole number! ");
        
    }

    // guess is spot on :D
    else if (secretNumber === guess) {
        newMessage("Correct Number!");

        let newHighscore = score;

        if (newHighscore > currentHighscore) {
            document.querySelector(".highscore").textContent = newHighscore;
        }

        newNumber(secretNumber);
        
        newHeader(" This Was My Number!");
        
        newBackgroundColor("#60b347");

        newWidth("30rem");

    }

    // guess is lower or higher
    else if (secretNumber !== guess) {
        if ( score > 1 ) {

            newMessage(guess > secretNumber ? "Try Lower!" : "Try Higher!");
            score -= 1;
            newScore(score);

        }
        else {
            newScore(0);

            newMessage("You Lost :( !");

            newHeader(" This Was My Number!");

            newBackgroundColor("#e01b1bcb") ;

            newWidth("30rem");

            newNumber(secretNumber);
        }

    };

});

document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    newScore(score);
    newHeader("Guess My Number!");
    newNumber("?");
    newMessage("Start Guessing ...");    
    newBackgroundColor ("#222") ;
    newWidth("15rem");
    document.querySelector(".guess").value = null;
    secretNumber = secretNumber = Math.trunc(Math.random()*20) + 1;
    
});
