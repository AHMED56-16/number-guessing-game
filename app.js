let guessedNumber = document.querySelector(".guessedNumber");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

function checkNumber() {
    let userInput = Number(document.querySelector(".guessedNumber").value);
    if (isNaN(userInput) || userInput < 1 || userInput > 20) {
        alert("Please enter a valid number between 1 and 20.");
        return;
    }
    
    if (userInput === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
        if (score > high_score) {
            high_score = score;
        }
        document.querySelector(".message").innerHTML = "Start guessing.....";
        document.querySelector(".score").textContent = "Score: 20";
        document.querySelector(".high-score").textContent = "High Score: " + high_score;
        document.querySelector(".guessedNumber").value = "";
        randomNumber = Math.floor(Math.random() * 20) + 1;
        score = 20;
    }
    else if (userInput < randomNumber) {
        document.querySelector(".message").innerHTML = "Guess higher number.";
        score--;
        document.querySelector(".score").textContent = "Score: " + score;
    }
    else {
        document.querySelector(".message").innerHTML = "Guess lower number.";
        score--;
        document.querySelector(".score").textContent = "Score: " + score;
    }
}

function again() {
    high_score=0;
    document.querySelector(".message").innerHTML = "Start guessing.....";
    document.querySelector(".score").textContent = "Score: 20";
    document.querySelector(".high-score").textContent = "High Score: " + high_score; 
    document.querySelector(".guessedNumber").value = "";  
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20; 
}
