const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const logs = require("./api/logs");

const app = express();
const middlewares = require("./middlewares");
require("dotenv").config();
app.use(morgan("common"));
app.use(helmet());

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.use("/api/logs", logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at  http://localhost:${port}`);
});
