const { Schema, model } = require("mongoose");

// Poll Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  option: {
    type: String,
    default: 'Natural',
  },
  status: {
    type: String,
    default: 'pending',
  },
});

// Poll Model
const Task = model("Task", TaskSchema);

// export here
module.exports = Task;
