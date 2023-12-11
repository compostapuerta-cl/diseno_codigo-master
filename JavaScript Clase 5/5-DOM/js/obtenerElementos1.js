//?🧸🧸getElementById Nos permite obtener un elemento en base a su atributo id
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

//?🧸🧸querySelector Nos devuelve el primer elemento que coincida con un selector estilo CSS
//!NOTA: Devuelve un nodelist.
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);

//?🧸🧸querySelectorAll Nos da una coleccion de elementos.
//!NOTA: Devuelve un nodelist.
const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

cajas.forEach( (caja) => {
console.log(caja);
});


//?🧸getElementsByTagName Nos permite obtener los elementos en base a la etiquta.
//!NOTA: Devuelve una coleccion HTML (no podriamos usar el forEach).
const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en la pagina`);

//?🧸getElementsByClassName Nos permite obtener una coleccion de elementos en base a su clase
//!NOTA: Devuelve una coleccion HTML (no podriamos usar el forEach).
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//?🧸closest Nos permite buscar de adentro hacia afuera en busca de un elemento
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal')); 

//?🧸Podemos encadenar todos los metodos para obtener elementos.
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));