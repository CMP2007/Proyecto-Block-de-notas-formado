let alto =window.screen.availHeight;//obtiene el alto
let ancho = window.screen.availWidth;//obtiene el ancho

comprar = confirm(`El alto es: ${alto}, el Ancho es: ${ancho}`);

if (comprar) {
    alert("compra exitosa")
} else {
    alert("Compra cancelada")
}