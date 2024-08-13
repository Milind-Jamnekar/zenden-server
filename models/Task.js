const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const { Schema } = mongoose;

// creating user schema
const taskSchema = new Schema({
  task: String,
  isDone: Boolean,
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
