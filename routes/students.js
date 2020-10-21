const express = require("express");
const router = express.Router();
const { uniqueId } = require("lodash");

let students = [];

// READ
router.get("/", (req, res) => {
  res.status(200).send(students);
});

// READ
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const targetStudent = students.find(std => std.id === id);
  res.status(200).send(targetStudent);
});

// CREATE
router.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;

  const newStudent = { id: uniqueId(), name, age, gender };
  students.push(newStudent);

  res.status(201).send(newStudent);
});

// DELETE
router.delete("/:id", (req, res) => {
  const targetId = req.params.id;

  students = students.filter(std => std.id !== targetId);

  res.status(204).send();
});

// UPDATE
router.put("/:id", (req, res) => {
  const targetId = req.params.id;
  const { name, age, gender } = req.body;

  const targetStudentIdx = students.findIndex(std => std.id === targetId);
  students[targetStudentIdx] = { id: targetId, name, age, gender };

  res.status(200).send({ message: "Updated" });
});

module.exports = router; 