const nombre = 'pepita'; // string
const apellido = 'pérez';
const edad = 20;
const anios = 2; // number

// ejemplo de concatenación
let resultado =
  nombre +
  ' ' +
  apellido +
  ' tiene ' +
  edad +
  ' años y dentro de ' +
  anios +
  ' años tendrá ' +
  (anios + edad);
//console.log(resultado);

/* operadores aritmeticos */

// modulo, resto
const num1 = 10;
const num2 = 3;

resultado = num1 % num2;
//console.log(resultado);

// operadores asignación y comparación

const a = '10';
const b = 10;

resultado = a == b;
//console.log(resultado);
resultado = a === b;
//console.log(resultado);

// operadores de incremento y decremento
let x = 1;
x--;
//console.log(x);

/* Ciclos */

/* while (true) {
  console.log('siempre se cumple la condición');
} */
let num = 6;

while (num < 5) {
  //console.log(num);
  num++;
}

//num = 0;

do {
  //console.log('se ejecutó...');
  num++;
} while (num < 5);

/* ejemplos */
num = 1;

while (num < 10) {
  //console.log('num:', num);
  const resto = num % 2;
  //console.log('resto:', resto);
  //console.log(num + ' % 2 = ' + resto);
  if (resto === 0) {
    //console.log(num + ' es un número par');
  } else {
    //console.log(num + ' es un número impar');
  }
  num++;
}

// métodos js
//alert('Hello, World!');
//resultado = confirm('¿Acepta los términos y condiciones?');
//console.log(resultado);
//resultado = prompt('Nombre: ');
//console.log(resultado);

let respuesta;
do {
  respuesta = prompt('¿Quieres salir?');
  console.log(respuesta);
} while (respuesta !== 'Si');
