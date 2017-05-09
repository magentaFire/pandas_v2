var spans = document.getElementsByTagName("span");
var botonRestaurar = document.getElementById("botonRestaurar");
var imgContainer = document.getElementsByClassName("imgContainer");

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", cierraImagen)
}
botonRestaurar.addEventListener("click", restauraImgs);

function cierraImagen() {
  this.parentNode.style.display = "none";
}

function restauraImgs() {
  for (var i = 0; i < imgContainer.length; i++){
    console.log("holi");
    imgContainer.style.display = "block"
  }
}
