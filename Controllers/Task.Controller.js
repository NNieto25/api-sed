const Task = require('../Models/Task');

const taskController = {
    createTask: (req, res) => {
        try {
            const task = new Task({
                text: req.body.text
            });

            task.save();

            res.json({
                success: true
            });
        } catch (error) {
            console.error(error);
            res.json({
                success: false
            });
        }
    },

    getAllTasks: async (req, res) => {
        try {
            const tasks = await Activity.find({}, {}, {
                sort: '-createdAt'
            });
            res.json({
                success: true,
                tasks: tasks
            });

        } catch (error) {
            console.error(error);
            res.json({
                success: false,
                tasks: null,
            });
        }
    },
    updateTask: async (req, res) => {
        try {
            const taskId = req.params.id;
            const task = Task.findById(taskId);
            task.text = req.body.text;
            await task.save();

            res.json({
                success: true
            });
        } catch (error) {
            res.json({
                success: false
            });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await Task.findByIdAndRemove(req.params.id);
            res.json({
                success: true
            });
        } catch (error) {
            console.error(error);
            res.json({
                success: false
            });
        }
    }
}

module.exports = taskController;