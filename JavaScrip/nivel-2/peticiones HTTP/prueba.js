const peticion = new XMLHttpRequest();





peticion.addEventListener("load", ()=>{
    let respuesta
    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento no se ha encontrado el archivo"
    console.log(respuesta);
})

peticion.open("GET", "dato.txt");

peticion.send()