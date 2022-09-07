function convert_measures(measure, initial_measure, final_measure) {
  var longitud = 0;
  longitud = measure;

  var medida_inicial = "";
  medida_inicial = initial_measure;

  var medida_final = "";
  medida_final = final_measure;

  var resultado = 0;

  //   var mm = "mm";
  //   var cm = "cm";
  //   var dm = "dm";
  //   var m = "m";
  //   var Dm = "Dm";
  //   var Hm = "Hm";
  //   var Km = "Km";

  if (medida_inicial === "mm" && medida_final === "cm") {
    resultado = longitud / 10;
  } else if (medida_inicial === "mm" && medida_final === "dm") {
    resultado = longitud / 100;
  } else if (medida_inicial === "mm" && medida_final === "m") {
    resultado = longitud / 1000;
  } else if (medida_inicial === "mm" && medida_final === "Dm") {
    resultado = longitud / 10000;
  } else if (medida_inicial === "mm" && medida_final === "Hm") {
    resultado = longitud / 100000;
  } else if (medida_inicial === "mm" && medida_final === "Km") {
    resultado = longitud / 1000000;
  } else if (medida_inicial === "cm" && medida_final === "mm") {
    resultado = longitud * 10;
  } else if (medida_inicial === "cm" && medida_final === "dm") {
    resultado = longitud / 10;
  } else if (medida_inicial === "cm" && medida_final === "m") {
    resultado = longitud / 100;
  } else if (medida_inicial === "cm" && medida_final === "Dm") {
    resultado = longitud / 1000;
  } else if (medida_inicial === "cm" && medida_final === "Hm") {
    resultado = longitud / 10000;
  } else if (medida_inicial === "cm" && medida_final === "Km") {
    resultado = longitud / 100000;
  } else if (medida_inicial === "dm" && medida_final === "mm") {
    resultado = longitud * 100;
  } else if (medida_inicial === "dm" && medida_final === "cm") {
    resultado = longitud * 10;
  } else if (medida_inicial === "dm" && medida_final === "m") {
    resultado = longitud / 10;
  } else if (medida_inicial === "dm" && medida_final === "Dm") {
    resultado = longitud / 100;
  } else if (medida_inicial === "dm" && medida_final === "Hm") {
    resultado = longitud / 1000;
  } else if (medida_inicial === "dm" && medida_final === "Km") {
    resultado = longitud / 10000;
  } else if (medida_inicial === "m" && medida_final === "mm") {
    resultado = longitud * 1000;
  } else if (medida_inicial === "m" && medida_final === "cm") {
    resultado = longitud * 100;
  } else if (medida_inicial === "m" && medida_final === "dm") {
    resultado = longitud * 10;
  } else if (medida_inicial === "m" && medida_final === "Dm") {
    resultado = longitud / 10;
  } else if (medida_inicial === "m" && medida_final === "Hm") {
    resultado = longitud / 100;
  } else if (medida_inicial === "m" && medida_final === "Km") {
    resultado = longitud / 1000;
  } else if (medida_inicial === "Dm" && medida_final === "mm") {
    resultado = longitud * 10000;
  } else if (medida_inicial === "Dm" && medida_final === "cm") {
    resultado = longitud * 1000;
  } else if (medida_inicial === "Dm" && medida_final === "dm") {
    resultado = longitud * 100;
  } else if (medida_inicial === "Dm" && medida_final === "m") {
    resultado = longitud * 10;
  } else if (medida_inicial === "Dm" && medida_final === "Hm") {
    resultado = longitud / 10;
  } else if (medida_inicial === "Dm" && medida_final === "Km") {
    resultado = longitud / 100;
  } else if (medida_inicial === "Hm" && medida_final === "mm") {
    resultado = longitud * 100000;
  } else if (medida_inicial === "Hm" && medida_final === "cm") {
    resultado = longitud * 10000;
  } else if (medida_inicial === "Hm" && medida_final === "dm") {
    resultado = longitud * 1000;
  } else if (medida_inicial === "Hm" && medida_final === "m") {
    resultado = longitud * 100;
  } else if (medida_inicial === "Hm" && medida_final === "Dm") {
    resultado = longitud * 10;
  } else if (medida_inicial === "Hm" && medida_final === "Km") {
    resultado = longitud / 10;
  } else if (medida_inicial === "Km" && medida_final === "mm") {
    resultado = longitud * 1000000;
  } else if (medida_inicial === "Km" && medida_final === "cm") {
    resultado = longitud * 100000;
  } else if (medida_inicial === "Km" && medida_final === "dm") {
    resultado = longitud * 10000;
  } else if (medida_inicial === "Km" && medida_final === "m") {
    resultado = longitud * 1000;
  } else if (medida_inicial === "Km" && medida_final === "Dm") {
    resultado = longitud * 100;
  } else if (medida_inicial === "Km" && medida_final === "Hm") {
    resultado = longitud * 10;
  } else {
    resultado = longitud;
  }

  resultado = resultado;
  //   document.write(" tu peso en " + nombre + " es " + peso_final + " kilos");
  //   alert(planeta + " y " + peso_final);
  document.getElementById("calculation_measures__final_message").innerText =
    "Los " +
    measure +
    " " +
    initial_measure +
    " equivalen a " +
    resultado +
    " " +
    final_measure;
}
