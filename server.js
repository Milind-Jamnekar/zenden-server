const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { port, db } = require("./config");
const router = require("./router");

const app = express();
mongoose.connect(db, {
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

app.listen(port, () => {
  console.log(`Server started on port  + ${port}`);
});
