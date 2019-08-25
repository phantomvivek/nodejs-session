const express = require("express");
const bodyParser = require("body-parser");

const authMiddleware = require("../middlewares/auth");
const homeController = require("../controllers/home");
const loginController = require("../controllers/login");

const router = express.Router();

//Define routes
router.get("/", homeController);
router.post("/login", bodyParser.json({ limit: "100kb" }), loginController);

module.exports = router;
