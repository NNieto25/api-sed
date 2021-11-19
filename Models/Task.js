import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: String,
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export default Task;