const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const { db } = require("./config");

const app = express();
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Express config settings
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Router
router(app);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port  + ${process.env.PORT}`);
});
