let free = false;

const validarCliante = (time)=>{
    let edad = prompt("cual es tu edad");
    if (edad > 18) {
        if(time >= 2 && time < 7  && free == false){
            alert("puedes pasar y sera gratis por que eres el primero despues de las 2  AM");
            free = true;
        } else {
            alert(`Son las ${time}:00Hs puedes pasar pero debes pagar la entrada`);
        }
    } else {
        alert("Lo siento no puedes pasar");
    }
}


validarCliante(23);
validarCliante(2);
validarCliante(0.2);
validarCliante(0.6);
validarCliante(2);
validarCliante(2);
validarCliante(2.4);
validarCliante(3);
 