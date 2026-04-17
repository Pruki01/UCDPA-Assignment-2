const settingsBtn   = document.querySelector("#settings");
const colourBtn     = document.querySelector("#colour__button");
const taskBtn       = document.querySelector("#task__button");

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