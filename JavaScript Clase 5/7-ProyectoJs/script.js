//BLANCO Y NEGRO
const darkmode = document.getElementById('darkmode');
const cuerpo = document.getElementsByTagName('body')[0];
// console.log(cuerpo);
// Usar [0] para obtener el primer elemento del arreglo de elementos

darkmode.addEventListener('click', () => {
    cuerpo.classList.toggle('darkMode');
});


const contenedor = document.getElementById('contenedor');
const productoImagen = contenedor.querySelector('.imagenGrande');
const imgChicas = contenedor.querySelector('.contenedor__imagenes--chica');



imgChicas.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
      
        const imagenSrc = e.target.src;

        //*obtenemos la posicion del ultimo
        const lastIndex = imagenSrc.lastIndexOf('/') //PERMITE CONOCE LA UBICACION DE LA ULTIMA DIAGONAL


        //*cortamos la cadena de texto para obtener solamente una parte.
        //SUBSTRING NOS PERMITE CORTAR UNA CADENA DE TEXTO A PARTIR DE CIERTA POSICION MAS 1
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        //cambiamos la ruta de la imagen del producto
        productoImagen.src = `./img/${nombreImagen}`;
   
    }
});
