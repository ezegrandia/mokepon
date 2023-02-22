function changeLanguagePage(language) {
    fetch("/assets/json/translate.json")
        .then((response) => response.json())
        .then((data) => {
            // Modificar el subtítulo
            subtitle.textContent = data[language].subtitlePage1;
            smallFooter.textContent = data[language].footer;

            // Modificar el botón
            // mainBtn.textContent = data[language].button;

            if (language === "es") {
                logoImg.src = "/assets/img/logo-es.svg";
            } else {
                logoImg.src = "/assets/img/logo-en.svg";
            }
        });
}
