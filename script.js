var roll = document.getElementById("btn")
roll.addEventListener("click", rollDie)
const d1 = document.getElementById("d1")
const d2 = document.getElementById("d2")
var date = document.getElementById("day")
const currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();


const result = document.getElementById('result');

var total = 0
var die1 = 0
var die2 = 0
function rollDie(){
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    date.innerHTML = day + "/" + month + "/" + year + " at "  + hour + ":" + minute;

    if (die1 == 1){
        img1 = "dice-1.svg"
    }
    else if (die1 == 2){
        img1 = "dice-2.svg"
    }
    else if (die1 == 3){
        img1 = "dice-3.svg"
    }
    else if (die1 == 4){
        img1 = "dice-4.svg"
    }
    else if (die1 == 5){
        img1 = "dice-5.svg"
    }
    else{
        img1 = "dice-6.svg"
    }
    d1.innerHTML = "<img src='" + img1 + "' alt='" + die1 +"'>'";

    if (die2 == 1){
        img2 = "dice-1.svg"
    }
    else if (die2 == 2){
        img2 = "dice-2.svg"
    }
    else if (die2 == 3){
        img2 = "dice-3.svg"
    }
    else if (die2 == 4){
        img2 = "dice-4.svg"
    }
    else if (die2 == 5){
        img2 = "dice-5.svg"
    }
    else{
        img2 = "dice-6.svg"
    }
    total = die1 + die2
    d2.innerHTML = "<img src='" + img2 + "' alt='" + die2 +"'>'";
    
    if (total >= 8){
        result.innerHTML = "You didn't win: Try Again!"
    }
    else{
        result.innerHTML = "You Win: Try Again!"
    }
    
}
