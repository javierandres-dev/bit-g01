// estructuras de datos
var variable1 = 'soy var';
let variable2 = 'soy let';
const constante = 'soy const';

const arreglo = ['amarillo', 'azul', 'rojo'];

// Ciclos

for (let index = 0; index < arreglo.length; index++) {
  //console.log(index);
  //console.log(arreglo[index]);
}

//console.log(arreglo[1]);

// Estructuras condicionales

const edad = 10;

if (edad > 18) {
  //console.log('es mayor de edad');
} else {
  //console.log('no es mayor de edad');
}

const countries = ['Colombia', 'Perú', 'Brasil'];

for (let index = 0; index < countries.length; index++) {
  if (countries[index] === 'Colombia') {
    //console.log('es Colombia');
  } else if (countries[index] === 'Brasil') {
    //console.log('es Brasil');
  } else {
    //console.log('no es Colombia ni Brasil');
  }
}

//console.log(navigator.language);

const lang = navigator.language;
//console.log(lang);

if (lang.startsWith('es')) {
  //console.log('mostrar contenido en español');
} else {
  //console.log('show english content');
}

// operadores

const nombre = 'Pepita';
const apellido = 'Pérez';

//const concatenar = nombre + apellido;
const concatenar = nombre + apellido + edad;
//console.log(concatenar);

//const num1 = '1';
const num1 = 1;
const num2 = 1;

const suma = num1 + num2;
//console.log(suma);

// funciones
function miFuncion1() {
  //console.log('ejecutando miFuncion1');
}

miFuncion1();

const miFuncion2 = () => {
  //console.log('ejecutando miFuncion2');
};

miFuncion2();

// funciones que reciben argumentos
function operar(num1, num2, operacion) {
  //console.log(num1, num2, operacion);
  /*  if (operacion === 'suma') {
    console.log(num1 + num2);
  } */
  switch (operacion) {
    case 'suma':
      console.log('suma:', num1 + num2);
      break;
    case 'resta':
      console.log('resta:', num1 - num2);
      break;
    case 'multiplicar':
      console.log('multiplicar:', num1 * num2);
      break;
    case 'dividir':
      console.log('dividir:', num1 / num2);
      break;
    default:
      console.log('esta operación no está contemplada');
      break;
  }
}

operar(8, 4, 'suma');
operar(8, 4, 'resta');
operar(8, 4, 'multiplicar');
operar(8, 4, 'dividir');
