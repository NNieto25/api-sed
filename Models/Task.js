const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: String,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;