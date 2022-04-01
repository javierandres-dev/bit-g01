/* ESTRUCTURAS DE DATOS DEL BACKEND PROVISIONAL PARA PROBAR */
const validCredentials = {
  // objeto, notación del punto
  username: 'asd@asd.asd',
  password: '123',
};

/* ESTRUCTURAS DE DATOS */
const $username = document.getElementById('inUsername');
const $password = document.getElementById('inPassword');
const $submit = document.getElementById('submitBtn');
const $private = document.getElementById('private');
const $modal = document.getElementById('staticBackdrop');
const $success = document.getElementById('success');
const $error = document.getElementById('error');
const $close = document.getElementById('closeBtn');

const myCredentials = {
  username: null,
  password: null,
};

/* FUNCIONES */
const handleUsername = (event) => {
  //console.log('value:', event.target.value);
  myCredentials.username = event.target.value;
  //console.log(myCredentials);
};

const handlePassword = (event) => {
  //console.log('value:', event.target.value);
  myCredentials.password = event.target.value;
  //console.log(myCredentials);
};

const handleSubmit = () => {
  // validar credenciales
  const username = myCredentials.username === validCredentials.username;
  //console.log(username);
  const password = myCredentials.password === validCredentials.password;
  //console.log(password);
  if (username && password) {
    //console.log('permitir acceso');
    $private.classList.remove('disabled');
    //console.log($private);
    //console.log($modal);
    //console.log($close);
    // mostrar mensaje de éxito
    $success.classList.remove('d-none');
    // luego, ocultar mensaje de éxito
    setTimeout(() => {
      $success.classList.add('d-none');
      $close.click();
    }, 3000);
  } else {
    //console.log('denegar acceso');
    // mostrar error
    $error.classList.remove('d-none');
    // luego, ocultar mensaje de error
    setTimeout(() => {
      $error.classList.add('d-none');
    }, 3000);
  }
};

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
  $username.addEventListener('input', handleUsername);
  $password.addEventListener('input', handlePassword);
  $submit.addEventListener('click', handleSubmit);
});
