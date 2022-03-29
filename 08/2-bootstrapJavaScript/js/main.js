//let name = 'pepita';
//let names = ['luis', 'maría', 'ana', 'carlos'];

/* SCOPE */
//var edad = 22;
//let edad = 21;
//const edad = 20;

/* ESTRUCTURAS DE DATOS */
const d = document;

const $form = d.querySelector('form');
const $nombre = d.getElementById('nombre');
//const $enviar = d.getElementById('enviar');

/* FUNCIONES */
const handleChange = (e) => {
  console.log('ejecutando handle change...');
  console.log('evento:', e);
  console.log('valor:', e.target.value);
  const nombre = e.target.value;
  console.log('nombre:', nombre);
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('ejecutando handle submit...');
};

/* EVENTOS */
d.addEventListener('DOMContentLoaded', () => {
  $nombre.addEventListener('input', handleChange);
  //$enviar.addEventListener('click', handleSubmit);
  $form.addEventListener('submit', handleSubmit);
});
