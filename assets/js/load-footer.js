// Carga el contenido del footer.html y lo inserta en el elemento <footer></footer> del index.html
fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    });
