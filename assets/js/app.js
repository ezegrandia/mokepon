const signature = document.getElementById("signature");
const audio = document.getElementById("audio");
const audioBtn = document.getElementById("audio-btn");
const helpBtn = document.getElementById("help-btn");
const logoImg = document.getElementById("logo-img");
const logoLink = document.getElementById("logo-link");
const subtitle = document.getElementById("subtitle");
const helpPanel = document.getElementById("help-panel");
const mainBtn = document.getElementById("main-btn");
const smallFooter = document.getElementById("small-footer");
const githubBtn = document.getElementById("github-btn");
const githubLink = document.getElementById("github-link");
const linkedinBtn = document.getElementById("linkedin-btn");
const linkedinLink = document.getElementById("linkedin-link");

let cards = document.getElementsByClassName("card"); //object
let cardsArr = Array.from(cards); //array
let audioCount = 0;
let helpPanelCount = 0;
let panelStatus = 0;

//Play y Pausa del sonido del juego
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

//Abre el panel de ayuda y manda a llamar a la funcion que desactiva el resto de la pagina
function openHelpPanel() {
    helpPanel.classList.add("visible");
    panelStatus = 1;
    enableDisableBtns(panelStatus);
}
//Cierra el panel de ayuda y manda a llamar a la funcion que activa el resto de la pagina de nuevo
function closeHelpPanel() {
    helpPanel.classList.remove("visible");
    panelStatus = 0;
    enableDisableBtns(panelStatus);
}
//Activa y desactiva los botones y sus animaciones
function enableDisableBtns(panelStatus) {
    if (panelStatus == 1) {
        logoLink.removeAttribute("href");
        logoImg.classList.remove("title-logo-img-hover");
        signature.removeAttribute("href");
        signature.classList.remove("signature-hover");
        // mainBtn.classList.remove("btn-hover");
        // cardsArr.forEach((card) => card.classList.remove("card-hover"));
        githubLink.removeAttribute("href");
        githubBtn.classList.remove("hover");
        linkedinLink.removeAttribute("href");
        linkedinBtn.classList.remove("hover");
    } else if (panelStatus == 0) {
        logoLink.setAttribute("href", "./mokepon.html");
        logoImg.classList.add("title-logo-img-hover");
        signature.setAttribute("href", "https://www.linkedin.com/in/ezegrandia/");
        signature.classList.add("signature-hover");
        // mainBtn.classList.add("btn-hover");
        // cardsArr.forEach((card) => card.classList.add("card-hover"));
        githubLink.setAttribute("href", "https://github.com/ezegrandia/mokepon");
        githubBtn.classList.add("hover");
        linkedinLink.setAttribute("href", "https://www.linkedin.com/in/ezegrandia/");
        linkedinBtn.classList.add("hover");
    }
}
