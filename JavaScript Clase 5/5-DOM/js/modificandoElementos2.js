//?🤑elemento.innerHTML Nos permite cambiar el contenido HTML de un elemento
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<h1> Hola! </h1>';

//?🤑elemento.attribute Nos permite acceder y cambiar atributos del elemento.
primeraCaja.id = 'nuevo-id';

//?🤑elemento.setAttribute() Nos permite agregar o establecer el valor de un atributo del elemento.
primeraCaja.setAttribute('class','caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');

//?🤑elemento.style.property Nos permite cambiar los estilos css de un elemento
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
contenedor2Caja1.style.background = '#250';
contenedor2Caja1.style.color = 'red';
contenedor2Caja1.style.textTransform = 'uppercase';