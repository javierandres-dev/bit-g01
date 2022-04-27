/* VARIABLES */
const d = document;
const apiUrl = 'http://localhost:4000/api/v1/todos';
const $main = d.querySelector('main');
const $h1 = d.createElement('h1');
const $input = d.createElement('input');
const $crearBtn = d.createElement('button');
const $ol = d.createElement('ol');

$h1.textContent = 'Lista de tareas';
$main.appendChild($h1);
$main.appendChild($input);
$crearBtn.setAttribute('id', 'crearBtn');
$crearBtn.textContent = 'Crear tarea';
$main.appendChild($crearBtn);

let tareas = null;
let $botonesEliminar = null;

/* EVENTOS */
d.addEventListener('DOMContentLoaded', () => {
  leerTareas();
  escucharEventos();
});

const escucharEventos = () => {
  $crearBtn.addEventListener('click', crearTarea);
};

const vigilarEliminar = (botones) => {
  //console.log(botones);
  botones.forEach((boton) => {
    const id = boton.parentNode.id;
    //console.log(id);
    boton.addEventListener('click', () => eliminarTarea(id));
  });
};

/* FUNCIONES */
const crearTarea = () => {
  //console.log('...crear tarea...');
  const tarea = {
    name: $input.value,
    completed: false,
  };
  //console.log('tarea:', tarea);
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tarea),
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      //console.log('datos:', datos);
      if (datos.success) {
        leerTareas();
        $input.value = null;
      }
    })
    .catch((error) => console.log('error:', error));
};

const leerTareas = () => {
  $ol.innerHTML = null;
  fetch(apiUrl)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      //console.log('datos:', datos)
      tareas = datos.success;
      tareas.forEach((elemento) => {
        //console.log(elemento);
        const $li = d.createElement('li');
        $li.setAttribute('id', elemento._id);
        const $borrarBtn = d.createElement('button');
        $li.appendChild(d.createTextNode(elemento.name));
        $borrarBtn.classList.add('eliminar');
        $borrarBtn.textContent = 'Eliminar';
        $li.appendChild($borrarBtn);
        $ol.appendChild($li);
      });
      $main.appendChild($ol);
      $botonesEliminar = d.querySelectorAll('.eliminar');
      //console.log($botonesEliminar);
      vigilarEliminar($botonesEliminar);
    })
    .catch((error) => console.log('error:', error));
};

const eliminarTarea = (id) => {
  //console.log('id:', id);
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((respuesta) => leerTareas())
    .catch((error) => console.log('error:', error));
};
