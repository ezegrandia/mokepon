// Carga el contenido del help-panel.html y lo inserta en el elemento <aside></aside> del index.html
fetch("./assets/components/help-panel.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("help-panel").innerHTML = data;
  });
