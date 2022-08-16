// Guardar el estado (columna activa)
let columnaA = 1

// Selecionar las columnas
const columnas = document.querySelectorAll(".columna")

// Escuchar los "clicks" en cada una de ellas
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })    
})
// Cambiar el estado de las columnas
function cambiarColumna(indice) {
    columnas[columnaA].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaA = indice
}