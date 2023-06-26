//En este ejercicio se expande las funcionalidad de la calculadora y se implementa com un objeto.
class calculadora{
    constructor(){}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num)
    }
    raizCubica(num){
        return Math.cbrt(num)
    }
}

const CALCULADORA = new calculadora();
 
alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma; 2: resta 3: divición 4: multiplicación 5: potenciación 6: raiz cuadrada 7: Raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    let resultado = CALCULADORA.sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    let resultado = CALCULADORA.restar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    let resultado = CALCULADORA.dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    let resultado = CALCULADORA.multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("número para potenciar");
    let numero2 = prompt("exponenete");
    let resultado = CALCULADORA.potenciar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Conocer la raiz cuadrada de:");
    let resultado = CALCULADORA.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Conocer la raiz cubica de:");
    let resultado = CALCULADORA.raizCubica (numero1);
    alert(`tu resultado es ${resultado}`);
} else {
    alert("no se ha encotrado la operación")
}