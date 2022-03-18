//console.log('works!');
/* DOM */
const $contador = document.getElementById('contador');
const $btnIncrementar = document.getElementById('btnIncrement');
const $btnDecrementar = document.getElementById('btnDecrement');

let contador = 0;

$contador.textContent = contador;

function incrementar() {
  contador++;
  $contador.textContent = contador;
}

function decrementar() {
  contador--;
  $contador.textContent = contador;
}

document.addEventListener('DOMContentLoaded', () => {
  $btnIncrementar.addEventListener('click', () => {
    incrementar();
    if (contador > 0) {
      $contador.classList.remove('red');
      $contador.classList.add('blue');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
  $btnDecrementar.addEventListener('click', () => {
    decrementar();
    if (contador < 0) {
      $contador.classList.remove('blue');
      $contador.classList.add('red');
    }
    if (contador === 0) {
      $contador.classList.remove('red');
      $contador.classList.remove('blue');
    }
  });
});
