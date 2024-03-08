let numberElement = document.getElementById("random-nums")
let displayBtn = document.getElementById("display-nums")
let submitAnswer = document.getElementById("submit")
let userAnswer = document.getElementById("user-answer").value
let userLvl = document.getElementById("user-level")

displayBtn.addEventListener('click', () => displayNums())
submitAnswer.addEventListener('click', () => checkAnswer())

let numHolder = ''
let answer = ''

let level = 1
displayLvl()

function displayNums() {

    for (i=0; i < level + 3; i++) {

        randomNum = Math.floor(Math.random() * 10);
        numHolder += randomNum;
        answer = numHolder;

        numberElement.innerHTML = numHolder;

        setTimeout (function() {
            numberElement.innerHTML = '';
            numHolder = '';
        }, 3000 * level);
    }
}

function checkAnswer() {

    if (userAnswer === answer) {
        level++;
        displayLvl();
    } else {
        level = 1;
        displayLvl();
    }
}

function displayLvl() {

    userLvl.innerHTML = level;
}