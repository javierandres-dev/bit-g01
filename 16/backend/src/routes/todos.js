const express = require('express');
const router = express.Router();
const todoSchema = require('../models/todos');

/* CRUD */
router.post('/todos', (request, response) => {
  //response.send('crear tarea');
  console.log('request:', request.body);
  const newTodo = todoSchema(request.body);
  newTodo
    .save()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
});

router.get('/todos', (request, response) => {
  //response.send('leer todas las tareas');
  todoSchema
    .find()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
});

router.get('/todos/:id', (request, response) => {
  //response.send('leer una tarea específica');
  const { id } = request.params;
  todoSchema
    .findById(id)
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
});

router.put('/todos/:id', (request, response) => {
  //response.send('actualizar una tarea específica');
  const { id } = request.params;
  const todo = request.body;
  todoSchema
    .updateOne({ _id: id }, { $set: todo })
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
});

router.delete('/todos/:id', (request, response) => {
  //response.send('eliminar una tarea específica');
  const { id } = request.params;
  todoSchema
    .deleteOne({ _id: id })
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
});

module.exports = router;
