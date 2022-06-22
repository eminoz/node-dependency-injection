import dotenv from "dotenv";
dotenv.config({
  path:  "./config/env/config.env",
});

export const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
