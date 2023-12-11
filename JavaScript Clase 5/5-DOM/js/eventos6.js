const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', (e) => {
    primeraCaja.classList.toggle('activa');
    console.log(`PRESIONASTE UNA CAJA: ${e.target.innerHTML}`);
});




/* 😲Agregando el evento a multiples elementos
?Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
?Nota: Esta no es la forma mas optima, en el siguiende documento (PROPAGACION) es mejor forma.
*/

const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`PRESIONASTE UNA CAJA: ${e.target.innerHTML}`);
        //! ☠️target es el objetivo que recibio el evento (click).
    });
});