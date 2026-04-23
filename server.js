const app = require("./scr/app");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
  res.send("this is Home");
});

// app.get("/notes", (req, res) => {
//   res.send("this is notes");
// });
