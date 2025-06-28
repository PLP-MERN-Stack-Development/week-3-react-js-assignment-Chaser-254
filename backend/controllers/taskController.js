import Task from '../models/Task.js';

export async function getTasks(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
}

export async function addTask(req, res) {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
}

export async function deleteTask(req, res) {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
}