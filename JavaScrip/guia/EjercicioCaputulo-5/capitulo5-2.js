//30min por dia para las cosas de la casa al dia
//100min tareas al dia
//10min de descanso
//100min estudiar al dia
//240min de trabajar


let trabajo = "240 minutos de trabajo";
let tp = "100 minutos de tareas";
let estudio = "100 minutos de estudio";
let homework = "30 minutos de tareas delhogar";
let descanso = "10 minutos de descanso";


console.log("TAREAS");
for (let i = 0; i < 14; i++) {
    if(i == 0){
        console.groupCollapsed("semana 1")
    }
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i ==6) {
        console.groupEnd();
        console.groupCollapsed("semana 2")
    }
}

console.groupEnd();


