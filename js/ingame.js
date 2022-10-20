knut();
let playerArr = players.split(",");
playerAmount = playerArr.length;
let i2 = 0;

while (i2 < playerAmount) {
  i2++;
  console.log("hej");
  var playerContainer = document.getElementById("container");
  var playerCard = document.createElement("div");

  playerCard.setAttribute("class", "item");
  playerCard.setAttribute("id", "player" + i2);
  playerCard.insertAdjacentText("beforeend", playerArr[i2 - 1]);

  playerContainer.appendChild(playerCard);
}

if (playerAmount < 5) {
    playerContainer.style.width = "max-content"
}

//timer settings
const wholeTimer = document.getElementById("timer")
const timerSeconds = document.getElementById("timer-seconds")
const timerMinutes = document.getElementById("timer-minutes")
const colon = document.getElementById("colon")
let onVar = false;
let finishedVar = false;
let seconds = 0;
let countdown;

timerSeconds.textContent = seconds
colon.textContent = ":0"

// !IMPORTANT KALLE!
//Detta (minutes) ska vara den globala variabeln som sätt i timer.html,
//bara för nu har jag satt den som 2 för test
let minutes = 2
timerMinutes.textContent = minutes

function startTimer() {
    countdown = setInterval(function(){
        if(onVar === false){
            return
        }
        else {
            seconds--;
            timerSeconds.textContent = seconds;
            if (seconds <10 && seconds > 1) {
                colon.textContent = ":0"
            }
            else if(seconds == 0 && minutes == 0) {
                clearInterval(countdown);
                colon.innerHTML = "TIME´S UP!"
                timerSeconds.textContent = ""
                timerMinutes.textContent = ""
                finishedVar = true
                colon.setAttribute("#hide")
            }
            else if (seconds == -1 ) {
                minutes--
                timerMinutes.textContent = minutes
                seconds = 59
                timerSeconds.textContent = seconds
                colon.textContent = ":"
            }
        }  
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

//function
wholeTimer.addEventListener("click", function(){
    console.log("Timer klickad")
    if (onVar === false && finishedVar === false) {
        startTimer()
        onVar = true
    }
    else if (onVar === true && finishedVar === false) {
        stopTimer()
        onVar = false
    }
})

//player card being in focus when clicked on
playerCard.addEventListener("click", function(){
    playerCard.classList.add('focus')
    console.log(playerCard + "trycktes på")
})