const settingsBtn       = document.querySelector("#settings");
const colourBtn         = document.querySelector("#colour__button");
const counter           = document.querySelector("#counter");
const pomodoroCounter   = document.querySelector("#pomodoro__timer");
const shortBreakCounter = document.querySelector("#short__break-timer");
const longBreakCounter  = document.querySelector("#long__break-timer");
const startBtn          = document.querySelector("#start");
const runningBtns       = document.querySelector("#running__buttons");
const restartBtn        = document.querySelector("#reset");
const stopBtn           = document.querySelector("#stop");
const taskWrapper       = document.querySelector("#tasks");
const taskBtn           = document.querySelector("#task__button");
const taskArea          = document.querySelector("#todo__tasks");
let createBtn;
let taskCounter         = 0;

let timer;
let pomodoroCounterSettings   = "25:00";
let shortCounterSettings      = "5:00";
let longCounterSettings       = "15:00";

let settings = ["25:00", "5:00", "15:00"];

const CounterSettings = {

    POMODORO: 0,
    SHORT: 1,
    LONG: 2

};

let currentTimerSetting = CounterSettings.POMODORO;

settingsBtn.addEventListener("click", () =>{

    document.querySelector(".modal__overlay").classList.toggle("hidden");

});

colourBtn.addEventListener("click", () => {

    const colourSetting = document.querySelector("#colour__settings").value;
    document.querySelector("body").style.backgroundColor = colourSetting;

})

pomodoroCounter.addEventListener("click", ()=>{

    currentTimerSetting = settings[CounterSettings.POMODORO];
    counter.innerHTML   = currentTimerSetting;

})

shortBreakCounter.addEventListener("click", ()=>{

    currentTimerSetting = settings[CounterSettings.SHORT];
    counter.innerHTML   = currentTimerSetting;

})

longBreakCounter.addEventListener("click", ()=>{

    currentTimerSetting = settings[CounterSettings.LONG];
    counter.innerHTML   = currentTimerSetting;

})

startBtn.addEventListener("click", () => {

    timer = setInterval(countdown, 1000);
    startBtn.classList.toggle("minimized");
    runningBtns.classList.toggle("minimized");

});

stopBtn.addEventListener("click", () => {

    clearInterval(timer);
    startBtn.classList.toggle("minimized");
    runningBtns.classList.toggle("minimized");

});

restartBtn.addEventListener("click", () => {

    clearInterval(timer);
    counter.innerHTML = currentTimerSetting;
    startBtn.classList.toggle("minimized");
    runningBtns.classList.toggle("minimized");

});

taskBtn.addEventListener("click", () =>{

    const formWrapper           = document.createElement("div");
    formWrapper.id              = "form__wraper";

    const errorBox              = document.createElement("div");
    errorBox.className          = "error__box minimized";

    const errorMsg              = document.createElement("h3");

    const containerDiv          = document.createElement("div");
    containerDiv.id             = "create__task-form";

    const newForm               = document.createElement("form");
    newForm.action              = "/";
    newForm.method              = "GET";

    const taskName              = document.createElement("input");
    taskName.type               = "text";
    taskName.name               = "task__name";
    taskName.placeholder        = "Task";

    const description           = document.createElement("input");
    description.type            = "text";
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

taskArea.addEventListener("click", (e) =>{

    const task = e.target.closest(".task__content");

    if(task){

        task.parentElement.classList.toggle("minimized");

        console.log(task);
        console.log(task.children);

        const taskText              = task.children[0].textContent;
        const count                 = task.children[1].textContent;
        const descriptionText       = task.parentElement.children[1].children[0].textContent;

        const formWrapper           = document.createElement("div");

        const errorBox              = document.createElement("div");
        errorBox.className          = "error__box minimized";

        const errorMsg              = document.createElement("h3");

        const containerDiv          = document.createElement("div");

        const newForm               = document.createElement("form");
        newForm.action              = "/";
        newForm.method              = "GET";

        const taskName              = document.createElement("input");
        taskName.type               = "text";
        taskName.name               = "task__name";
        taskName.placeholder        = `${taskText}`;

        const description           = document.createElement("input");
        description.type            = "text";
        description.name            = "task__description";
        
        if(descriptionText){

            description.value       = descriptionText;

        } else {

            description.placeholder     = "Description";

        }

        const totalCount            = document.createElement("input");
        totalCount.type             = "number";
        totalCount.name             = "task__count";
        totalCount.value            = "1";

        const button                = document.createElement("button");
        button.type                 = "button";
        button.textContent          = "Create";
        button.id                   = "save__button";

        errorBox.appendChild(errorMsg);

        newForm.appendChild(taskName);
        newForm.appendChild(description);
        newForm.appendChild(totalCount)
        newForm.appendChild(button);
        
        containerDiv.appendChild(newForm);
        formWrapper.appendChild(errorBox);
        formWrapper.appendChild(containerDiv);

        task.appendChild(formWrapper);
    }

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

        const newDiv                = document.createElement("div");
        newDiv.id                   = `task-${taskCounter}`;
        newDiv.className            = "task";
        
        const taskDiv               = document.createElement("div");
        taskDiv.className           = "task__content";

        const newTask               = document.createElement("h2");
        newTask.textContent         = task;

        const newCount              = document.createElement("h4");
        newCount.textContent        = `0/${count}`;

        const descriptionDiv        = document.createElement("div"); 
        descriptionDiv.className    = "task__description";

        taskDiv.appendChild(newTask);
        taskDiv.appendChild(newCount);


        if(desc){

            const newDescription        = document.createElement("p");
            newDescription.textContent  = desc;
            descriptionDiv.appendChild(newDescription);

        }

        const deleteButton            = document.createElement("button");
        deleteButton.id               = `delete-${taskCounter}`;
        deleteButton.type             = "button";
        deleteButton.textContent      = "Delete";

        descriptionDiv.appendChild(deleteButton);

        newDiv.append(taskDiv);
        newDiv.append(descriptionDiv);

        const fragment = document.createDocumentFragment();
        fragment.appendChild(newDiv);

        taskArea.appendChild(fragment);

        taskCounter++;

    }



}
