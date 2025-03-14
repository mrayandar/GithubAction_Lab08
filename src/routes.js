const express = require("express");
const { createEvent, getEvents } = require("./controllers");

const router = express.Router();
router.post("/", createEvent);
router.get("/", getEvents);

module.exports = router;
