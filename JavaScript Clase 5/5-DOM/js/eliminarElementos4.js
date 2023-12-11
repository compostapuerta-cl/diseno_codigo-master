const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaAEliminar = padre.querySelector('.caja');

    if(cajaAEliminar){ //Pregunta si existe una caja, si existe se ejecuta
        padre.removeChild(cajaAEliminar);
    }

};

