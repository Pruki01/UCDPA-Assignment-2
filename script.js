const settingsBtn       = document.querySelector("#settings");
const colourBtn         = document.querySelector("#colour__button");
const counter           = document.querySelector("#counter");
const pomodoroCounter   = document.querySelector("#pomodoro__timer");
const shortBreakCounter = document.querySelector("#short__break-timer");
const longBreakCounter  = document.querySelector("#long__break-timer");
const startBtn          = document.querySelector("#start");
const taskWrapper       = document.querySelector("#tasks");
const taskBtn           = document.querySelector("#task__button");
const taskArea          = document.querySelector("#todo__tasks");
let createBtn;
let taskCounter         = 0;

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

    setInterval(countdown, 1000);

});

taskBtn.addEventListener("click", () =>{

    const formWrapper           = document.createElement("div");
    formWrapper.id              = "form__wraper";

    const errorBox              = document.createElement("div");
    errorBox.id                 = "error__box";
    errorBox.className          = "minimized";

    const errorMsg              = document.createElement("h3");

    const containerDiv          = document.createElement("div");
    containerDiv.id             = "create__task-form";

    const newForm               = document.createElement("form");
    newForm.action              = "/";
    newForm.method              = "GET";

    const taskName              = document.createElement("input");
    taskName.type               = "type";
    taskName.name               = "task__name";
    taskName.placeholder        = "Task";

    const description           = document.createElement("input");
    description.type            = "type";
    description.name            = "task__description";
    description.placeholder     = "Description";

    const totalCount            = document.createElement("input");
    totalCount.type             = "number";
    totalCount.name             = "task__count";
    totalCount.value            = "1";

    const button                = document.createElement("button");
    button.type                 = "button";
    button.textContent          = "Create";
    button.id                   = "create__button";

    errorBox.appendChild(errorMsg);

    newForm.appendChild(taskName);
    newForm.appendChild(description);
    newForm.appendChild(totalCount)
    newForm.appendChild(button);
    
    containerDiv.appendChild(newForm);
    formWrapper.appendChild(errorBox);
    formWrapper.appendChild(containerDiv);
    
    const fragment  = document.createDocumentFragment();
    const taskForm  = fragment.appendChild(formWrapper);

    taskArea.appendChild(taskForm);
    createBtn = document.querySelector(`#${button.id}`);
    createBtn.addEventListener("click", taskCreation);

    taskBtn.classList.toggle("minimized");

});

function strTimeToIntTime(){

    const splitTime = counter.innerHTML.split(":");
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
    const strSeconds    = intSeconds > 9 ? intSeconds.toString() : "0" + intSeconds.toString();
    
    return strMinutes + ":" + strSeconds;
}

function countdown(){

    const currentTime   = strTimeToIntTime();
    let minutes         = currentTime[0];
    let seconds         = currentTime[1];

    if (seconds > 0){

        seconds--;

    } else if(minutes > 0) {

        minutes--;
        seconds = 59;

    } else {



    }

    counter.innerHTML = intTimeToStrTime([minutes, seconds]);
}

function taskCreation(){

    const form  = document.querySelector("#create__task-form form");
    const task  = form.querySelector("input[name='task__name']").value.trim();
    const desc  = form.querySelector("input[name='task__description']").value.trim();
    const count = form.querySelector("input[name='task__count']").value.trim();

    const error = document.querySelector("#error__box h3");

    console.log(task, desc, count);
    if(!task){

        error.textContent = "Please enter your Task!";
        document.querySelector("#error__box").classList.toggle("minimized");

    } 
    else if( 0 > count || !count){

        error.textContent = "Please enter your count for the task!";
        document.querySelector("#error__box").classList.toggle("minimized");


    } else{

        document.querySelector("#form__wraper").remove();
        taskBtn.classList.toggle("minimized");

        const newDiv        = document.createElement("div");
        newDiv.id           = `task-${taskCounter}`;
        newDiv.className    = "task";
        
        const taskDiv       = document.createElement("div");

        const newTask       = document.createElement("h2");
        newTask.textContent = task;

        const newCount      = document.createElement("h4");
        newCount.textContent = `0/${count}`;

        taskDiv.appendChild(newTask);
        taskDiv.appendChild(newCount);

        newDiv.append(taskDiv);

        if(desc){

            const newDescription        = document.createElement("p");
            newDescription.textContent  = desc;
            newDiv.appendChild(newDescription);

        }


        const fragment = document.createDocumentFragment();
        fragment.appendChild(newDiv);

        taskArea.appendChild(fragment);

        taskCounter++;

    }



}
