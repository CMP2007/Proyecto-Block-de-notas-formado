/**
 Ejemplo de una forma de validacion de los campos de un input, (no es una forma real de hacerlo)
 */

//Se hallan los elementos HML
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado")


//Se inicia el escuchador de eventos
boton.addEventListener("click", (e)=>{
    e.preventDefault()   
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else{
        resultado.innerHTML ="Solicitud enviada correctamete";
        resultado.classList.add("green");
        resultado.classList.remove("red")
    }
})


const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40 ) {
    error[0]=true;       
    error[1] = "El nombre es invalido";
    return error;
    } else if (mail.value.length < 5 ||
        mail.value.length > 40 ||
        mail.value.indexOf("@") == -1 ||
        mail.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El email es invalido";
        return error;
    } else if (materia.value.length < 4 || materia.value.length > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error
    }



    error[0] = false;
    return error;
}

