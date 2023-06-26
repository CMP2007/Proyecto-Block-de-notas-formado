
const obtenerInformacion = (materia)=>{
    let materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodrigez", "pedro", "juan", "pepito", "cofla", "maria"],
    }
    if (materias[materia] !== undefined){//Se valida que el array no este indefinido
        return [materias[materia], materia, materias];
    } else { 
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];//Se guarda el primer valor del array ya que este representa la profesor de la materia
    let alumnos = informacion[0];
    alumnos.shift();////Se guarda todo el array y luego se elimina el primer dato ya que este se trata del profesor, no es alumno
    document.write(`EL profesor de <b>${informacion[1]}</b> <b style="color:red"> ${profesor} </b><br>
    los alumnos son: <b style="color: blue"> ${alumnos} </b> <br> <br>` );
}
}


const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info  in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color:blue">
    ${alumno}</b> esta en <b>${cantidadTotal} clases: <b style="color:green">${clasesPresentes}</b><br><br>
    `;
}


mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("pedro"));