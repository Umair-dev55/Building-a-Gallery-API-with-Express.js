const express = require("express");
const app = express();
app.use(express.json()); //Middleware
const notes = [];
//Post Method
app.post("/notes", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Notes Created Sucessfully",
  });
  notes.push(req.body);
});
//Get Method
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Data Fetch Sucessfully",
    notes: notes,
  });
});
//Delete Method
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "Note Deleted Successfully",
  });
});
//Patch Method
module.exports = app;
