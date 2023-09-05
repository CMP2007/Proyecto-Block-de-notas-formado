"use strict";

// El siguite es un ejemplo del como usar el objeto "Date" para realizar un reloj, tener en cuenta que actualmente no se utiliza la función "setInterval" de bido a que esta consume demacioados recursos, en su lugar actualmente se utilizan librerias, por lo tanto este codigo solo cumple la función de ejemplo, no es una verdadera ejecución de un reloj 


//Debido a que los metodos de Date cuando su valor es menor a 10 muestran un solo digito y eso cambiaria la estructura de los estilos CSS se crea la función addCeros para añadir un cero en caso de que el resultado de los metodos solo tenga un digito  
 const addCeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
    //Se combierte a string con "toString" ya que ".length" no funciona con datos number, luego se concatena el nuevo cero
 };

//Se crea el objeto Date se utilizan sus metodos y se ingresan sus resultados en los contenedores DIV, luego se usa un "setInterval" para repetir la función cada segundo 
 const actualizarHora = ()=> {
    const time = new Date();
    let hora = addCeros(time.getHours());
    let min = addCeros(time.getMinutes());
    let seg = addCeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
 }

 actualizarHora();

 setInterval(actualizarHora, 1000);