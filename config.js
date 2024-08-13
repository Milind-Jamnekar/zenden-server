// config.js

require("dotenv").config({ path: __dirname + ".env" });
module.exports = {
  db: process.env.DB,
  port: process.env.PORT,
  secret: process.env.SECRET,
};
