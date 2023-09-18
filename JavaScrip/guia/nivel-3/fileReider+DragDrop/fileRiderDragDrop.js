/* En este codigo se ejemplifica el como cargar elementos multimedia en la paguina con una barra de carga incorporada */

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e=>{//dragover evento de arrastrar por ensima
    e.preventDefault();
    changeStyle(e.srcElement, "#444");
})

zona.addEventListener("dragleave", e=>{//evento de salir al arrastrar
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zona.addEventListener("drop", e=>{//evento de soltar encima
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0])
    zona.style.border = "4px solid #888"
})


const changeStyle = (obj, color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

// bloque de codigo usado para mostrar archivos de tipo "VIDEO" al soltarse en la zona
const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress",e=>{
        // console.log(ar.size);//De este modo se obtiene el peso del archivo
         // console.log(e.loaded);//De este modo se obtiene el peso que ha sido cargado hasta ese momento
        let carga = Math.round(e.loaded / ar.size * 100) //Juntando los dos metodos se obtiene el porcentaje que ha sido cargado del archivo (se multiplica por 100 ya que el porcentaje se expresa en decimales)
        zona.textContent = `${carga}%`;//añadir estilos de la barra de carga dinamicamente
        document.querySelector(".barra-carga").style.padding = `75px 20px`;
        document.querySelector(".barra-carga").style.width = `${carga}%`;
    });
    reader.addEventListener("loadend", e=>{//añadir estilos de la barra de carga dinamicamente
        changeStyle(zona, "#2e7");
        zona.style.borderStyle = "solid";
        document.querySelector(".barra-carga").style.background = "#2e7";
        setTimeout(()=>{
            zona.style.color = "#fff"
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡Carga Completa!"
        },500)
    })
    reader.addEventListener("load", e=>{//Añadir el archivo en pantalla y se reproduce
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url)
        document.querySelector(".resultado").appendChild(img);
        zona.style.border = "4px solid #888"
       img.play()
    })
}






//bloque de codigo usado para mostrar los archivos de texto al soltarse en la zona

// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load", e=>{
//         document.querySelector(".resultado").textContent = e.currentTarget.result
//     })
// }




//Este bloque de codigo usado para mostrar imagenes al soltarse en la zona

// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsDataURL(ar);
//     reader.addEventListener("load", e=>{
//         let url = URL.createObjectURL(ar);
//         let img = document.createElement("IMG");
//         img.setAttribute("src",url)
//         document.querySelector(".resultado").appendChild(img);
//     })
// }