const express = require('express');
const connectDb = require('./pkg/database/database');
// import { config } from "./pkg/config/index.js";
const router= require('./router/index');

const StartServer = async () => {
  const app = express();
  app.use(express.json())
  await connectDb();
  app.use(router);
  app
    .listen(3000, () => {
      console.log(`lintening to port ${3000}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};
StartServer();
