//MODIFICAR ESTILOS CSS MEDIANTE CLASES
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

//?🤣 classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () => {
    primeraCaja.classList.add('activa');

}

//?🤣 classList.remove() - Nos permite eliminar clases a un elemento.
const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
}


//?🤣 classList.toggle() - Nos permite alternar clases de un elemento
const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
}



//?🤣 classList.contains() - Nos permite comprobar si el elemento contiene una clase.
const comprobarClase = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase "activa"');
    } else {
        console.log('la caja no tiene la clase "activa"');
    }
};