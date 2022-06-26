const mongoose = require("mongoose");
// import { config } from "../config/index.js";
module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eminoz:Q8DZaO6sdnBDA4Uj@cluster0.cvbx9.mongodb.net/di?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
