const express = require("express");
const app = express();
const studentRoute = require("./routes/students");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/students", studentRoute);

app.listen(5555, () => {
  console.log("Server is running at PORT 5555");
});