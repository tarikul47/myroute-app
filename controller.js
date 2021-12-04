const Task = require("./Task");

// define the get route
exports.getTaskRoute = async (req, res) => {
  try {
    let tasks = await Task.find();
    res.render("home", { tasks });
  } catch (e) {
    console.log(e);
  }
};
// define the about route
exports.postTaskRoute = async (req, res) => {
  let { name, description, option } = req.body;
  let task = new Task({
    name,
    description,
    option,
  });
  try {
    const result = await task.save();
    console.log(result);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
