const agregar = document.getElementById('agregar');
const eliminar = document.getElementById('eliminar');
const primeraCaja = document.querySelector('.caja');

const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
};


agregar.addEventListener('click', () => {
    primeraCaja.addEventListener('click', toggleClase);
});

eliminar.addEventListener('click', () => {
    primeraCaja.removeEventListener('click', toggleClase);
});