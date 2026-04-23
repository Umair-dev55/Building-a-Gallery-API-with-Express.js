const express = require("express");
const app = express();
app.use(express.json()); //middleware
const notes = [];
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.status(201).send("Created successfully");
});
app.get("/notes", (req, res) => {
  res.json(notes);
});
module.exports = app;
