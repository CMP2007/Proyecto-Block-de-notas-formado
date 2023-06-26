class telefono {
    constructor (color, peso, resolucion, camara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
        
        this.grabar = `la camara de ${this.camara} esta grabando a ${this.resolucion}, quedan ${this.ram} de espacio disponible <br>`;
        this.foto = `la camara de ${this.camara} esta lista para tomar fotos a ${this.resolucion} <br>`
    }
    botonEncendido(){
        if (this.encendido == false){
            alert("celular encendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido=false;
        }
    }

    reiniciar(){
        if( this.encendido==true){
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de ${this.resolucion}`)
    }
    grabarVideo(){
        alert(`Grabando video a una resolución de ${this.resolucion}`)
    }
    mostrarInfo(){
        return `
        color: <b>${this.color}</b> <br>
        peso: <b>${this.peso}</b> <br>
        Resolución de camara: <b>${this.resolucion}</b> <br>
        Resolución de video: <b>${this.camara}</b> <br>
        Memoria Ram: <b>${this.ram}</b> <br>`
    }
}


class telefonoAltaGama extends telefono{
    constructor(color, peso, resolucion, camara, ram, camaraExtra){
        super(color,peso, resolucion, camara, ram);
        this.camaraExtra = camaraExtra
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolución camara extra ${this.camaraExtra}`;
    }
}//En un caso real esta estructura si se aplicaria a la programamciaón de un telefono, en cada metodo ciertamete se ingresaria todo el codigo necesario para grabar lento y para el reconocimiento facial



const samsum = new  telefono("negro", "250g", "740p", "12mpx", "4gb");
const aphone = new telefono("rojo", "270g", "1080p", "16mpx", "8gb");
const redmi = new telefono("azul", "230g", "740p", "9mpx", "6gb");
const poco = new telefonoAltaGama("rojo", "290g", "HD","24mpx", "12gb", "full HD");
const Huawuei = new telefonoAltaGama("negro", "310g", "HD", "24mpx", "12gb", "HD");


document.write(`
    ${samsum.mostrarInfo()} <br>
    ${aphone.mostrarInfo()} <br>
    ${redmi.mostrarInfo()} <br><br>
    <b>Telefonos de alta Gama</b><br><br>
    ${poco.infoAltaGama()} <br><br>
    ${Huawuei.infoAltaGama()} <br>`);



// samsum.botonEncendido();
// samsum.tomarFoto();
// samsum.grabarVideo();
// samsum.reiniciar();
// samsum.botonEncendido( );





