let numberElement = document.getElementById("random-nums")
let displayBtn = document.getElementById("display-nums")

displayBtn.addEventListener('click', () => displayNums())

let numHolder = ''
let answer = ''

let level = 1

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