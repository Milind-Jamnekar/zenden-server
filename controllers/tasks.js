const Task = require("../models/Task");

exports.post = async function (req, res, next) {
  const { task, isDone } = req.body;

  try {
    const newTask = await Task.create({ task, isDone });
    res.json({ message: "Task created successfully", task: newTask });
  } catch (err) {
    next(err); // Pass error to middleware for handling
  }
};

exports.update = async function (req, res, next) {
  const { task, isDone } = req.body;
  const id = req.params.id;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, isDone },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task updated successfully", task: updatedTask });
  } catch (err) {
    next(err); // Pass error to middleware for handling
  }
};

exports.getAll = async function (req, res, next) {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (err) {
    next(err); // Pass error to middleware for handling
  }
};

exports.delete = async function (req, res, next) {
  const id = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    next(err); // Pass error to middleware for handling
  }
};
