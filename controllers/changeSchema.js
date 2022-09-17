const controllerWrapper = require("../middleware/controllerWrapper");
const task = require("../models/changeSchema");
const getAllTasks = controllerWrapper(async (req, res) => {
  const Task = await task.find();
  res.status(200).json({ Task });
});

const createTask = controllerWrapper(async (req, res) => {
  const Task = await task.create(req.body);
  res.status(201).json({ Task });
});
const getTask = controllerWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const Task = await task.findOne({ _id: taskId });
  if (!Task) {
    // const error = new Error("Not Found");
    // error.status = 404;
    // return next(error);
    return res.status(404).json({ msg: `No task with ID : ${taskId}` });
  }

  res.status(200).json({ Task });
});
const updateTask = controllerWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const Task = await task.findOneAndUpdate({ _id: taskId }, req.body, {
    runValidators: true,
  });
  if (!Task)
    return res.status(404).json({ msg: `No task with ID : ${taskId}` });
  res.status(200).json({ Task });
});
const deleteTask = controllerWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const Task = await task.findOneAndDelete({ _id: taskId });
  if (!Task)
    return res.status(404).json({ msg: `No task with ID : ${taskId}` });
  res.status(200).json({ Task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
