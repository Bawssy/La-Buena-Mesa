// controllers/taskController.js
const Task = require('../entity/Task');

exports.assignTasks = async (req, res) => {
    try {
        const { cookId, tasks } = req.body;
        const newTask = new Task({ cookId, tasks });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const { cookId } = req.params;
        const tasks = await Task.find({ cookId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};