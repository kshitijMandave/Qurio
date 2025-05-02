const express = require("express");
const port = 9420;
const app = express();
const UsersRoute = require("./routes/usersRoute");

app.use("/users", UsersRoute);

app.listen(port, () => {
  console.log("NodeJS web server Started!!");
});
