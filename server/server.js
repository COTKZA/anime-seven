const express = require("express");
const app = express();
const sequelize = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const fs = require("fs");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT_SERVER;

// CORS configuration for credentials
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

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
