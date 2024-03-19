const express = require("express");
const { connectDB } = require("./config/db_config");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = 8000;

// connect database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});