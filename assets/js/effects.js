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
//Agrega un efecto de selección a las tarjetas de personaje
function toggleSelected(card) {
    //busca el elemento más cercano de la clase .mokepon-card a partir del elemento card que se pasó como argumento
    //es decir obtiene la tarjeta correspondiente al botón que se hizo clic.
    const targetCard = card.closest(".mokepon-card");

    //si la tarjeta ya tiene la clase selected
    //le quita esa clase, asi cuando da click y ya tenia el efecto, se lo saca
    if (targetCard.classList.contains("selected")) {
        targetCard.classList.remove("selected");

        //Si la tarjeta no está seleccionada, se procede a quitar la clase .selected a todas las tarjetas (esto asegura que solo una tarjeta esté seleccionada a la vez) y luego se agrega la clase .selected a la tarjeta targetCard, que  es la seleccionada.
    } else {
        const allCards = document.querySelectorAll(".mokepon-card");
        allCards.forEach((card) => card.classList.remove("selected"));
        targetCard.classList.add("selected");
    }
}
