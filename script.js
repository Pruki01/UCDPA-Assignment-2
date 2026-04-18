const settingsBtn       = document.querySelector("#settings");
const colourBtn         = document.querySelector("#colour__button");
const taskBtn           = document.querySelector("#task__button");
const counter           = document.querySelector("#counter");
const pomodoroCounter   = document.querySelector("#pomodoro__timer");
const shortBreakCounter = document.querySelector("#short__break-timer");
const longBreakCounter  = document.querySelector("#long__break-timer");
const startBtn          = document.querySelector("#start");

let pomodoroCounterSettings   = "25:00";
let shortCounterSettings      = "5:00";
let longCounterSettings       = "15:00";

settingsBtn.addEventListener("click", () =>{

    document.querySelector(".modal__overlay").classList.toggle("hidden");

});

colourBtn.addEventListener("click", () => {

    const colourSetting = document.querySelector("#colour__settings").value;
    document.querySelector("body").style.backgroundColor = colourSetting;

})

taskBtn.addEventListener("click", () => {

    console.log("Btn Clicked!");

    const taskArea = document.querySelector("#todo__tasks");

});

pomodoroCounter.addEventListener("click", ()=>{

    counter.innerHTML = pomodoroCounterSettings;

})

shortBreakCounter.addEventListener("click", ()=>{

    counter.innerHTML = shortCounterSettings;

})

longBreakCounter.addEventListener("click", ()=>{

    counter.innerHTML = longCounterSettings;

})

startBtn.addEventListener("click", () => {

    setInterval()

});

function strTimeToIntTime(){

    const splitTime = counter.innerHTML;
    let strMinutes  = splitTime[0];
    let strSeconds  = splitTime[1];

    let minutes     = parseInt(strMinutes);
    let seconds     = parseInt(strSeconds);

    return([minutes, seconds]);

}

function intTimeToStrTime(intTime){

    const intMinutes    = intTime[0];
    const intSeconds    = intTime[1];
    const strMinutes    = intMinutes.toString()
    const strSeconds    = intSeconds.toString();
    return strMinutes + ":" + strSeconds;
}

function countdown(){

    const currentTime   = strTimeToIntTime();
    let minutes         = currentTime[0];
    let seconds         = currentTime[1];

    if (seconds > 0){

        seconds--;

    } else {

        minutes--;
        seconds = 59;

    }

    counter.innerHTML = intTimeToStrTime([minutes, seconds]);
}