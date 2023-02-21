//Carga el contenido del header.html y lo inserta en el elemento <header></header> del index.html
fetch("./assets/components/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    });

// Carga el contenido del help-panel.html y lo inserta en el elemento <aside></aside> del index.html
fetch("./assets/components/help-panel.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("help-panel").innerHTML = data;
    });

// Carga el contenido del logo.html y lo inserta en el elemento con el id="logo-section" del index.html
fetch("./assets/components/logo.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("logo-section").innerHTML = data;
    });

// Carga el contenido del footer.html y lo inserta en el elemento <footer></footer> del index.html
// fetch("footer.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("footer").innerHTML = data;
//   });

// Función para cargar una pantalla y cambiar el contenido del elemento main
// function loadPage(page) {
//   fetch(page)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("main").innerHTML = data;
//     });
// }

// Carga el contenido de la primera pantalla y lo inserta en el elemento main
// loadPage("page1.html");

//El resto de pantallas se cargan segun los diferentes buttons y eventos onclick
