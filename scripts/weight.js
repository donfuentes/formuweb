function calculate_weight(weight, planet) {
  var peso = 0;
  peso = weight;

  var planeta = "";
  planeta = planet;

  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  var g_venus = 8.87;
  var g_neptuno = 11.15;
  var peso_final;
  var nombre;
  if (planeta === "Marte") {
    peso_final = (peso * g_marte) / g_tierra;
  } else if (planeta === "Jupiter") {
    peso_final = (peso * g_jupiter) / g_tierra;
  } else if (planeta === "Venus") {
    peso_final = (peso * g_venus) / g_tierra;
  } else if (planeta === "Neptuno") {
    peso_final = (peso * g_neptuno) / g_tierra;
  } else {
    peso_final = peso;
  }

  peso_final = parseInt(peso_final);
  //   document.write(" tu peso en " + nombre + " es " + peso_final + " kilos");
  //   alert(planeta + " y " + peso_final);
  document.getElementById("calculation__final_message").innerText =
    "Tu peso en el planeta " + planeta + " es " + peso_final + " kilos";
}
