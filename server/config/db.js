const mongoose = require("mongoose");

require("dotenv").config(); // Load environment variables from .env file

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
