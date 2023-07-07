const contenedor = document.querySelector(".contenedor");

let contador = 0;
        function crearLlave(nombre, modelo, precio) {
            contador++;
            img = "<img class='llave-img' src='llave.png'>";
            nombre = `<h2>${nombre}</h2>`;
            modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
            precio = `<p>Precio: <b>$${precio}</b></p>`;
            return [img, nombre, modelo, precio];
        };

changeHidden = (number) =>{
    document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");//REcordar que para que createElement reconozca el codigo HTML es necesaro escribirlo en mayuscula
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});//ESte es una declaracion de eventos, define que el valor de un elemento cambie con un click, se tocara el tema en profncidad el el siguiente nivel
    div.tabIndex =1;
    div.classList.add(`item-{i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];//Es este caso elije mandar los diferentes datos del array separados para dejar la posibilidad de hacer llavez de otra forma.
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);