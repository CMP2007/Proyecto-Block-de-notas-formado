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


let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");//REcordar que para que createElement reconozca el codigo HTML es necesaro escribirlo en mayuscula
    div.addEventListener("click", ()=>{
        document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex =1;
    div.classList.add(`item-{i}`, 'flex-item');
    div.innerHTML = ... llave; //este recutrso es el opreitorsprid, se tocara el tema en el siguite nivel, no se por que se dispara un error.
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);