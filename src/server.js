require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const eventRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/events", eventRoutes);

const PORT =
  process.env.PORT || (process.env.NODE_ENV === "test" ? 5001 : 5000);
const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "test")
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
