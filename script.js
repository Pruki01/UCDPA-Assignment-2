const settingsBtn       = document.querySelector("#settings");
const colourBtn         = document.querySelector("#colour__button");
const taskBtn           = document.querySelector("#task__button");
const counter           = document.querySelector("#counter");
const pomodoroCounter   = document.querySelector("#pomodoro__timer");
const shortBreakCounter = document.querySelector("#short__break-timer");
const longBreakCounter  = document.querySelector("#long__break-timer");

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