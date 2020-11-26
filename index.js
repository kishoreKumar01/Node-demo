const express = require("express");
const app = express();

const usersRoute = require("./routes/usersRoute");

app.use("/", usersRoute);

  app.get("/", (req, res) => {
    res.send(`<h1>Hey there!</h1>`);
  });

app.listen(3000, () => {
  console.log("The server is up and running");
});
