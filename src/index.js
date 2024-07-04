const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupandStartServer = async () => {
  const app = express();
  app.listen(3000, () => {
    console.log(`Listening at ${PORT}`);
  });
};
setupandStartServer();
