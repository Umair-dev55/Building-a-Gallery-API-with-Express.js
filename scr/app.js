const express = require("express");
const app = express();
app.use(express.json());
const notes = [];
app.post("/notes", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Notes Created Sucessfully",
  });
  notes.push(req.body);
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Data Fetch Sucessfully",
    notes: notes,
  });
});
app.delete("/notes/:index", (req, res) => {
  index = req.params.index;
  delete notes[index];
});
module.exports = app;
