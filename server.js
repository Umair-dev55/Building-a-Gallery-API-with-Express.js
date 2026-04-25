const app = require("./scr/app");
// server start
const post = 3000;
app.listen(post, () => {
  console.log(`Server is Running on http://localhost:${post}/`);
});
