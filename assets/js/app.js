const signature = document.getElementById("signature");
const audio = document.getElementById("audio");
const audioBtn = document.getElementById("audio-btn");
// const spanishBtn = document.getElementById("spanish-btn");
// const englishBtn = document.getElementById("english-btn");
const helpBtn = document.getElementById("help-btn");
const logoImg = document.getElementById("logo-img");
const logoLink = document.getElementById("logo-link");
const subtitle = document.getElementById("subtitle");
const helpPanel = document.getElementById("help-panel");
const mainBtn = document.getElementById("main-btn");

let cards = document.getElementsByClassName("card"); //object
let cardsArr = Array.from(cards); //array
let audioCount = 0;
let helpPanelCount = 0;
let panelStatus = 0;

// audio.onload = function () {
//   audioBtn.style.backgroundImage = "url(../img/audio-btn.svg)";
//   audioCount = 0;
// };

function soundOnOf() {
    if (audioCount == 0) {
        audioCount = 1;
        audioBtn.style.backgroundImage = "url(/assets/img/mute-btn.svg)";
        audio.play();
    } else {
        audioCount = 0;
        audioBtn.style.backgroundImage = "url(/assets/img/audio-btn.svg)";
        audio.pause();
    }
}

function changeLang(btn) {
    if (btn.id == "spanish-btn") {
        logoImg.setAttribute("src", "/assets/img/logo-es.svg");
        subtitle.innerHTML = "Selecciona un personaje para comenzar el viaje!";
        mainBtn.innerHTML = "Continuar";
    } else {
        logoImg.setAttribute("src", "/assets/img/logo-en.svg");
        subtitle.innerHTML = "Select a character to start the trip!";
        mainBtn.innerHTML = "Continue";
    }
}

function openHelpPanel() {
    helpPanel.classList.add("visible");
    panelStatus = 1;
    enableDisableBtns(panelStatus);
}

function closeHelpPanel() {
    helpPanel.classList.remove("visible");
    panelStatus = 0;
    enableDisableBtns(panelStatus);
}

function enableDisableBtns(panelStatus) {
    if (panelStatus == 1) {
        logoLink.removeAttribute("href");
        logoImg.classList.remove("title-logo-img-hover");
        signature.removeAttribute("href");
        signature.classList.remove("signature-hover");
        // mainBtn.classList.remove("btn-hover");
        // cardsArr.forEach((card) => card.classList.remove("card-hover"));
    } else if (panelStatus == 0) {
        logoLink.setAttribute("href", "./mokepon.html");
        logoImg.classList.add("title-logo-img-hover");
        signature.setAttribute("href", "https://www.linkedin.com/in/ezegrandia/");
        signature.classList.add("signature-hover");
        // mainBtn.classList.add("btn-hover");
        // cardsArr.forEach((card) => card.classList.add("card-hover"));
    }
}
