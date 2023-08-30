import axios from 'axios';

const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try{
        resultados = await axios("informacion-1.txt")
        aprobados.innerHTML = resultados.data.aprobados;
        desaprobados.innerHTML = resultados.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "La API falló";
        desaprobados.innerHTML ="La API falló";
    }
}


document.getElementById("getInfo").addEventListener("click",getInfo);