let numerico = 11; //NUMBER
let cadena = "11";  //STRING
let booleano = true; //BOOLEAN
let nulos = null; //NULL
let indefinidos; 

let objetoPersona = {  //OBJETO
 nombre: "Luis",  //PROPIEDADES
 edad: 22,
 musica: "Rock"
};
console.log(objetoPersona.nombre);
console.log(objetoPersona.edad);
console.log(objetoPersona.musica);

const {nombre, edad, musica} = objetoPersona; //DESTRUCTURACION DE UN OBJETO
console.log(nombre, edad , musica);

const arregloFrutas = ['Manzana','Pera','Uvas']; //ARREGLO
const [fruta1, fruta2, fruta3] = arregloFrutas; //DESTRUCTURACCION DE UN ARREGLO
console.log(fruta1);

function suma(num1, num2){ //FUNCION
console.log(num1 + num2);    
}
suma(1,2);

const sumaFlecha = (num1, num2) => {
    console.log(num1 + num2);
}
sumaFlecha(1,6)