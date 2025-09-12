const express = require("express");
const app = express();
const sequelize = require("./config/database");
const cors = require("cors");

const fs = require("fs");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT_SERVER;

app.use(express.json());
app.use(cors());

const routersPath = path.join(__dirname, "routes");
fs.readdirSync(routersPath).forEach((file) => {
  if (file.endsWith(".js")) {
    const route = require(path.join(routersPath, file));
    app.use(route);
  }
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync();
    console.log("Models sync successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  console.log(`Server is running on port ${port}`);
});
