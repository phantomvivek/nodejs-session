const express = require("express");
const bodyParser = require("body-parser");

const authMiddleware = require("../middlewares/auth");
const homeController = require("../controllers/home");
const loginController = require("../controllers/login");

const router = express.Router();

//Define routes
//TODO (Additional): Add auth middleware to home controller to log session from request and successfully complete this via the browser
router.get("/", homeController);

//Login route to handle POST login calls
router.post("/login", bodyParser.json({ limit: "100kb" }), loginController);

module.exports = router;
