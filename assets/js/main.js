var spans = document.getElementsByTagName("span");
var botonRestaurar = document.getElementById("botonRestaurar");
var botonOrigen = document.getElementById("botonOrigen");
var botonExtincion = document.getElementById("botonExtincion");
var imgContainer = document.getElementsByClassName("imgContainer");


for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", cierraImagen)
}

botonRestaurar.addEventListener("click", restauraImgs);
botonOrigen.addEventListener("click", switchOrigen);
botonExtincion.addEventListener("click", switchExtincion);

function cierraImagen() {
  this.parentNode.style.display = "none";
}

function restauraImgs() {
  for (var i = 0; i < imgContainer.length; i++) {
    imgContainer[i].style.display = "block";
  }
}

function switchOrigen () {
  console.log("origen");
  var parrafo1 = document.getElementById("parrafo1");
  if (parrafo1.style.display == "block") {
    parrafo1.style.display = "none";
  }
  else if (parrafo1.style.display == "none") {
    parrafo1.style.display = "block";
  }
}

function switchExtincion () {
  console.log("extincion");
  var parrafo2 = document.getElementById("parrafo2");
  if (parrafo2.style.display == "block") {
    parrafo2.style.display = "none";
  }
  else if (parrafo2.style.display == "none") {
    parrafo2.style.display = "block";
  }
}
