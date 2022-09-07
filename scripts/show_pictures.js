function show_pictures() {
  if (document.getElementById("Marte").checked) {
    document.getElementById("pictures_planet").style.backgroundImage =
      "url('./imgs/mars.png')";
  }

  if (document.getElementById("Tierra").checked) {
    document.getElementById("pictures_planet").style.backgroundImage =
      "url('./imgs/earth.png')";
  }

  if (document.getElementById("Jupiter").checked) {
    document.getElementById("pictures_planet").style.backgroundImage =
      "url('./imgs/jupiter.png')";
  }

  if (document.getElementById("Neptuno").checked) {
    document.getElementById("pictures_planet").style.backgroundImage =
      "url('./imgs/neptuno.png')";
  }

  if (document.getElementById("Venus").checked) {
    document.getElementById("pictures_planet").style.backgroundImage =
      "url('./imgs/venus.png')";
  }
}
