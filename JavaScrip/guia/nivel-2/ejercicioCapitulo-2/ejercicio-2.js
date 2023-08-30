let alumnos = [{// Se crean los datos a mostrar
    nombre: "lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "karin Gerra",
    email: "karin@gmail.com",
    materia: "Fisica 1"
},{
    nombre: "Jorge Ramirez",
    email: "Ramireso@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Facundo Roberto",
    email: "robert@gmail.com",
    materia: "Literatura "
},{
    nombre: "Cofla XD",
    email: "cofla@gmail.com",
    materia: "Recreo"
},];


let conteiner = document.querySelector(".grid-container"); ///se obtiene el contenedor HTML
let boton = document.querySelector(".boton-confirmar");

let htmlCode = "";


for (selecAlumno in alumnos){//Se recorre el array de los datos extrayendo cada uno
    let datos = alumnos[selecAlumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    //Se genera la estructura html a inplementar con sus respectivos datos
    htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="semana 1">semana 1</option>
                <option value="semana 2">semana 2</option>
            </select>
        </div>`;
        conteiner.innerHTML += htmlCode;//Se ingresa la estructura HTML con sus datos en el contenedor
}



boton.addEventListener("click", ()=>{//Se activa el escuchador de eventos del boton confirmar
    let confirmar = confirm("¿Realmente quieres confirmar las recuperaciones?");//se confirma la accion del usuario
    if (confirmar) {
        document.body.removeChild(boton);//se remueve el boton
        let elementos = document.querySelectorAll(".semana");//se seleccionan tanto los div contnedor del las semanas como el elemento select dentro de estos
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (selecElemento in elementos){//se recorre la varialbe que contiene los div
            semanas = elementos[selecElemento];//se usa el contador de la repeticion para extraer los datos pertienetes
            semanas.innerHTML = semanasElegidas[selecElemento].value;//se mete el valor de los datos extraidos y se ingresa en pantalla
        }
    }
})