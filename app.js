const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const app = express();
// app.use(cors());
app.use(express.json());

const authRouter = require("./routes/authRoutes");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const DB_URL = process.env.DB_ENDPOINT;

mongoose
  .connect(DB_URL, connectionParams)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log('Error connecting to the database',err))


app.use("/auth",authRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`)
);
