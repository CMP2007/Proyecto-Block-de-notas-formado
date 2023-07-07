
// En este ejercicio Primero solicita los datos atravez de la función prompt
/*let dineroCofla = prompt ("¿Cuanto dinero tienes?");
let dineroRoberto = prompt ("¿Cuanto dinero tienes?");
let dineroPedro = prompt ("¿Cuanto dinero tienes?");
//Ya que la función promp devuerve una cadena de texto la convertimos a numero entero
dineroCofla = parseInt(dineroCofla);*/

//Luego con una estructura de IF define los casos y los mensajes respectivos para cada caso
/*if (dineroCofla >= 0.6 && dineroCofla <= 1) {
     alert("Y te sobran: " +( dineroCofla - 1))
    alert("Cofla Compra el helado de agua y tu cambio seria de: " + cambio);
} else if (dineroCofla >= 1 && dineroCofla <= 1.6) {
     alert("Y te sobran: " + (dineroCofla - 1.6));
    alert("Cofla Compra el helado de Crema y tu cambio seria de: " + cambio);
} else if (dineroCofla >= 1.6 && dineroCofla <= 1.7) {
     alert("Y te sobran: " + (dineroCofla - 1.7));
    alert("Cofla Compra el helado de Azucar y tu cambio seria de: " + cambio);
} else if (dineroCofla >= 1.7 && dineroCofla <= 1.8) {
     alert("Y te sobran: " +( dineroCofla - 1.8));
    alert("Cofla Compra el helado de Sal y tu cambio seria de: " + cambio);
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
     alert("Y te sobran: " + (dineroCofla - 2.9));
    alert("Cofla Compra el helado de Leche y tu cambio seria de: " + cambio);
} else if (dineroCofla >= 2.9) {
     alert("Y te sobran: " + (dineroCofla - 2.9));
    alert("Cofla Pedes comprar un helado de de cofites o un pote de 1/4kg y tu cambio seria de: " + cambio);
} else {
    alert("Lo siento Cofla no tienes suficiente dinero para un helado");
}*/




//Se genera el caso correspondiente para cada usuario
/*if (dineroRoberto >= 0.6 && dineroRoberto <= 1) {
    alert("Roberto Compra el helado de agua")
} else if (dineroRoberto >= 1 && dineroRoberto <= 1.6) {
    alert("Roberto Compra el helado de Crema")
} else if (dineroRoberto >= 1.6 && dineroRoberto <= 1.7) {
    alert("Roberto Compra el helado de Azucar")
} else if (dineroRoberto >= 1.7 && dineroRoberto <= 1.8) {
    alert("Roberto Compra el helado de Sal")
} else if (dineroRoberto >= 1.8 && dineroRoberto <= 1.6) {
    alert("Roberto Compra el helado de Leche")
} else if (dineroRoberto >= 1 && dineroRoberto < 2.9) {
    alert("Roberto Compra el helado de Papa")
} else if (dineroRoberto >= 2.9) {
    alert("Roberto Pedes comprar un helado de de cofites o un pote de 1/4kg")
} else {
    alert("Lo siento Roberto no tienes suficiente dinero para un helado");
}*/





//Se genera el caso correspondiente para cada usuario
/*if (dineroCofla >= 0.6 && dineroCofla <= 1) {
    alert("Pedro Compra el helado de agua")
} else if (dineroPedro >= 1 && dineroPedro <= 1.6) {
    alert("Pedro Compra el helado de Crema")
} else if (dineroPedro >= 1.6 && dineroPedro <= 1.7) {
    alert("Pedro Compra el helado de Azucar")
} else if (dineroPedro >= 1.7 && dineroPedro <= 1.8) {
    alert("Pedro Compra el helado de Sal")
} else if (dineroPedro >= 1.8 && dineroPedro <= 1.6) {
    alert("Pedro Compra el helado de Leche")
} else if (dineroPedro >= 1 && dineroPedro < 2.9) {
    alert("Pedro Compra el helado de Papa")
} else if (dineroPedro >= 2.9) {
    alert("Pedro Pedes comprar un helado de de cofites o un pote de 1/4kg")
} else {
    alert("Lo siento Pedro no tienes suficiente dinero para un helado");
}*/



//Al fiinal este ejemplo ni se hacerca a la estructura real que podira tener este programa
//Pero sirve para probar todos los expresiones que se han enseñado en hasta este punto.  



array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forcarlos:
for (let array in array2) {
    if (array == 2) {
        continue forcarlos;
        for (let array of array1){
            document.write(array + "<br>");
            
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}
