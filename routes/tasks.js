const express = require('express');
const router = express.Router();

const {createTask, getAllTasks, updateTask, deleteTask} = require('../Controllers/Task.Controller');

router.post('/create', createTask);
router.get('/', getAllTasks);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;