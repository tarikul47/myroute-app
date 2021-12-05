const Task = require("./Task");

// define the get route
exports.getTaskRoute = async (req, res) => {
  try {
    let tasks = await Task.find();
    console.log(tasks);
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
    await task.save();
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
};

// define the get single route
exports.getSingleTaskRoute = async (req, res) => {
  let id = req.params.id;
  try {
    let stasks = await Task.findById(id);
    //res.json(stasks.name);
    res.render("singleTask", { stasks });
  } catch (e) {
    console.log(e);
  }
};

// define the update single route
exports.updateSingleTaskRoute = async (req, res) => {
  let id = req.params.id;
  let { name, description, option } = req.body;

  try {
    let task = await Task.findById(id);
    const result = await Task.updateOne(
      { _id: task._id },
      { $set: { name, description, option } }
    );
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};

// define the delete single task
exports.deleteSingleTaskRoute = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let task = await Task.findById(id);
  const result = await Task.deleteOne({ _id: task._id });
  res.json(result);
};


// define the delete single task
exports.statusSingleTaskRoute = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.json(result);
};
