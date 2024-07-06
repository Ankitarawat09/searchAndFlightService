const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
require("../config/config.json");
const ApiRoutes = require("./routes/index");

const setupandStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
  app.listen(3000, () => {
    console.log(`Listening at ${PORT}`);
  });
};
setupandStartServer();
