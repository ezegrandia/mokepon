//Carga el contenido del header.html y lo inserta en el elemento <header></header> del index.html
fetch("./assets/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
