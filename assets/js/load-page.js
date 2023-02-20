// Función para cargar una pantalla y cambiar el contenido del elemento main
function loadPage(page) {
    fetch(page)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("main").innerHTML = data;
        });
}

// Carga el contenido de la primera pantalla y lo inserta en el elemento main
loadPage("page1.html");

//El resto de pantallas se cargan segun los diferentes buttons y eventos onclick
