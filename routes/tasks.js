const express = require('express');
const router = express.Router();

import {createTask, getAllTasks, updateTask, deleteTask} from '../Controllers/Task.Controller';

router.post('/create', createTask);
router.get('/', getAllTasks);
router.put('update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;