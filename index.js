import express from "express";
import { connectDb } from "./pkg/database/database.js";
import { config } from "./pkg/config/index.js";
import router from "./router/index.js";

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
