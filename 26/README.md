# Proyecto final de apoyo

## Descripción

Este proyecto consiste en una aplicación full stack construida con el stack MEAN (Mongo, Express, Angular, Node).

### Requerimientos

Para ejecutar este proyecto en su local asegurese de:

1. Tener [NodeJS](https://nodejs.org/) instalado
2. Debe tener una base de datos [MongoDB](https://www.mongodb.com/) habilitada y configurar la ruta de acceso en una variable de entorno con el nombre ".env".  Ver archivo de ejemplo ".env-EXAMPLE".

### Instrucciones

1. Clonar repositorio ``https://github.com/javierandresgp/bit-course-full_stack_01/tree/main/26``

2. Una vez clonado el repositorio en su local, debe abrir 3 terminales y ejecutar lo siguiente

###### Terminal 1
```
$ cd frontend
$ npm install
$ ng serve
```

###### Terminal 2
```
$ cd todosBackend
$ npm install
$ npm run dev
```

###### Terminal 3
```
$ cd usersBackend
$ npm install
$ npm run dev
```

Asegurese de no tener ningún error en cada una de las tres terminales.

3. Abra un navegador web e ingrese a: ``http://localhost:4200``

Navegue por el sitio

Para acceder al contenido "Privado" primero debe registrarse y luego iniciar sesión.

4. En la zona de contenido "Privado" podrá ejecutar operaciones CRUD acerca de una lista de tareas.

¡Listo!

#### Autor
[dev](https://javierandresgp.com)
