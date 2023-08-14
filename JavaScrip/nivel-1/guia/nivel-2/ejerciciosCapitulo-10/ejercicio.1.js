//En este ejercico se usa try catch y switch, en sircunstancias normales estos recursos no se usarian para estos casos, pero al tratarse de un ejercicio del cap 10 se utlizaran para ponerlos enpractica

const sedButton = document.getElementById("snd-nota");//se vincula el elemento boton

sedButton.addEventListener("click", ()=> {//se inicia el escuchador de eventos
    let prevRest, resultado, mensaje;//se generan las variables
    try {
        prevRest = parseInt(document.getElementById("nota").value);//se extrae el valor del input y se usa "parseInt" para forzar la convercion a numero
        if (isNaN(prevRest)) {//se valida si los datos son o no numeros, si no lo son se dispara un error
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRest);//Se usan las funciones establecidas en la parte inferior del documento
        resultado = verificarAprovacion(8, 5, prevRest);
    } catch (e) {//se captura el error y se muestra un mensaje en consola
        prevRest = "ERES GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje)//se usa la funcion para mostrar el resultado en pantalla
})

const definirMensaje = (pr)=>{//esta funcion switch para mostrar un mensaje en particular para cada una de las posibles notas
    let mensaje;
    switch (pr) {
        case 1: mensaje = "No puedes ser tan malo";
            break;
        case 2: mensaje = "Por lo meos ontentalo";
            break;
        case 3: mensaje = "No sabes casi nada";
            break;
        case 4: mensaje = "Muy mal";
            break;
        case 5: mensaje = "Mal";
            break;
        case 6: mensaje = "Regular";
            break;
        case 7: mensaje = "Bien, pero puedes mejorar";
            break;
        case 8: mensaje = "Muy bien";
            break;
        case 9: mensaje = "Exelente";
            break;
        case 10: mensaje = "No se puede hacer mejor";
            break;
        default: mensaje = null;
            break;
    }
    return mensaje;
}


const verificarAprovacion = (nota1, nota2, prevRest)=>{//Esta funcion calcula el promedio con la nota ingrsada y las notas existentes y prepara los elementos HTML que se mostraran en pantalla
    promedio = (nota1 + nota2 +prevRest) /3;
    if (promedio >= 7) {
        return "PROMEDIO: <span class='green'> APROBADO</span>";
    }
    return "PROMEDIO: <span class='red'>DESAPROBADO</span>";
}





const abrirModal = (res, msg) =>{//Esta funcion selecciona los elementos HTML y añade las clases para que se visualisen los contenedores del resultado, y luego ingresa el resultado en estos 
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu Prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}