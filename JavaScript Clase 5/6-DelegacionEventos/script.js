

document.querySelector('#boton').addEventListener('click', () => {
    const color = document.querySelector('.color').value;
    const nombre = document.querySelector('.nombre').value;
    const comida = document.querySelector('.comida').value;


    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
    <td>${color}</td>
    <td>${nombre}</td>
    <td>${comida}</td>
    `;

    document.querySelector('table').appendChild(nuevaFila);
});


//MANERA SIN DELEGACION DE EVENTOS
// document.querySelectorAll('td').forEach((td) => {
//     td.addEventListener('click', () => {
//         td.style.backgroundColor = 'tomato';
//     });
// });

document.querySelector('table').addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.tagName === 'TD'){
        e.target.style.backgroundColor = 'blue';
    }
});