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

let mokepones = [];
let characters = [];
let htmlContentMokepones;
let htmlContentCharacters;
let cards = document.getElementsByClassName("card"); //object
let cardsArr = Array.from(cards); //array
let audioCount = 0;
let helpPanelCount = 0;
let panelStatus = 0;

// function addCharacters() {
//     characters.push(ashi, mistery, ruck);
//     characters.forEach((character) => {});
// }
