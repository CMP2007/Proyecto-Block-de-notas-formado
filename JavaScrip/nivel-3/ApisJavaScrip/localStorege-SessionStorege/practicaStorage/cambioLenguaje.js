"use strict";
//Este se trata de un ejemplo de como guardar y utilizar los datos guardados en el local storage fingiando cambiar el lenguaje de una paguina


const modal = document.querySelector(".modal-overlay");//se obtiene el contenedor

//Esta fucion inicializa el escuchador de eventos de los botones y guarda los datos al clickearse estos, luego llama a la función cerrarModal
const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click", ()=>{
        localStorage.setItem("idioma", "en")
        cerrarModal()       
    })
    document.querySelector(".es").addEventListener("click", ()=>{
        localStorage.setItem("idioma", "es")
        cerrarModal()        
    })
    
    
}

//Esta función elimina el contenedor de la vista del usuario con una animacion css y un retraso de 1 segundo
const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>modal.style.display = "none", 1000);
}




const idioma = localStorage.getItem("idioma");

//si la key "idioma" no existe existe usar la funcion "definirIdioma" para añadir el dato el localStorage si ya existe el dato muestra el valor de este en consola y no se muestre el contenedor de la seleccion del lenguaje 
if (idioma === null) definirIdioma();
else {
    console.log(`Idioma ${idioma}`);
    console.log(modal);
    modal.style.display = "none";
 }
