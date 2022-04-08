/* DECLARAR UNA FUNCIÓN */
function sumar(num1, num2) {
  return num1 + num2;
}

const restar = (num1, num2) => {
  return num1 - num2;
};

function esPositivo(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

function saludar() {
  //console.log('Hola!');
}

/* LLAMAR UNA FUNCIÓN */
let resultado = sumar(2, 4);
//console.log('resultado sumar:', resultado);
resultado = restar(2, 4);
//console.log('resultado restar:', resultado);
resultado = esPositivo(2);
//console.log('resultado esPositivo:', resultado);
if (resultado) {
  //console.log('el número es positivo');
}
resultado = esPositivo(-2);
//console.log('resultado esPositivo:', resultado);
if (!resultado) {
  //console.log('el número es negativo');
}
saludar();

/* SIMULANDO PROMESA */
function simulaPromesa() {
  console.log('estado: pendiente');
  const condicion = true;
  if (condicion) {
    console.log('si cumple condición'); // resolve
  } else {
    console.log('no se cumple la condición'); // reject
  }
}
//simulaPromesa();

/* PROMESA */
const promesa = new Promise(function (resolve, reject) {
  //console.log('estado: pendiente');
  if (true) {
    resolve('la condición se cumple'); // then
  } else {
    reject('la condición no se cumple'); // catch
  }
});

/* EJEMPLO DE PROMESA */
/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

async function obtenerPost() {
  resultado = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (resultado.ok) {
    resultado = await resultado.json();
    console.log('resultado obtenerPost:', resultado);
    console.log(resultado[0].title);
  }
}

obtenerPost();
