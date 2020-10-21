const express = require("express");
const router = express.Router();
const { uniqueId } = require("lodash");

let todos = [];

// READ
router.get("/", (req, res) => {
  res.status(200).send(todos);
});

// READ 1 Element
router.get("/:id", (req, res) => {
  const targetId = req.params.id;
  const targetTodo = todos.find(todo => todo.id === targetId);

  res.status(200).send(targetTodo);
});

// CREATE
router.post("/", (req, res) => {
  const task = req.body.task;
  const newTask = { id: uniqueId(), task };

  todos.push(newTask);

  res.status(201).send(newTask);
});

// DELETE
router.delete("/:id", (req, res) => {
  const targetId = req.params.id;
  todos = todos.filter(todo => todo.id !== targetId);

  res.status(204).send();
});

// UPDATE
router.put("/:id", (req, res) => {
  const targetId = req.params.id;
  const task = req.body.task;
  const targetIdx = todos.findIndex(todo => todo.id === targetId);
  todos[targetIdx] = { id: targetId, task };

  res.status(200).send("success");
});

module.exports = router;