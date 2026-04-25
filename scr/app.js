const express = require("express");
const app = express();

// middleware (important for JSON)
app.use(express.json());
const notes = [];
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
});
app.get("/notes", (req, res) => {
  res.status(201).json({
    Message: "Data Fetched Sucessfully",
    notes: notes,
  });
});
const index = 1;
app.delete("/notes/:index", (req, res) => {});
module.exports = app;
