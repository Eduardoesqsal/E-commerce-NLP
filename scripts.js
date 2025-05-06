// Función para ampliar la imagen
function ampliarImagen(src) {
  const modal = document.getElementById("imagenModal");
  const modalImg = document.getElementById("imagenAmpliada");
  modal.style.display = "block";
  modalImg.src = src;
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("imagenModal").style.display = "none";
}

// Cerrar al hacer click fuera de la imagen
window.onclick = function (event) {
  const modal = document.getElementById("imagenModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
