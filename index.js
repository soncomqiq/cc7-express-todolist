const express = require("express");
const app = express();
const studentRoute = require("./routes/students");
const todoRoute = require("./routes/todos");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/students", studentRoute);
app.use("/todos", todoRoute);

app.listen(5555, () => {
  console.log("Server is running at PORT 5555");
});