const materiasHTML = document.querySelector(".materias");


const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },{
        nombre: "Calculo 3",
        nota: 8
    },{
        nombre: "Bases de Datos 3",
        nota: 9
    },{
        nombre: "Matematicas discretas 2",
        nota: 7
    },{
        nombre: "Programación 4",
        nota: 8
    },
]
//En esta función se genera una promesa, la cual obtiene los valores del objeto con un retraso random
const obtenerMateria = (id) =>{
    return new  Promise((resolve,reject)=>{
        let materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)}, Math.random()*400);//En el set timeout se usa una función flecha ya que de lo contrario aplica el "reolve" inmediatamete, en cambio al anidarlo en una función se ejecuta el tiempo de espera correctamente
    })
}
//En esta funcion asincrona se usa un "for" para recorrer el objeto y un "await" para asegurarse que el codigo espere cada uno de los datos antes de seguir ejecutandose, luego toma los valores de los datos y los inserta en los elementos HTML
const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
         materia[i] = await obtenerMateria(i);
         console.log(materia[i]);
         let newHTMLCode = `
         <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}


devolverMaterias()