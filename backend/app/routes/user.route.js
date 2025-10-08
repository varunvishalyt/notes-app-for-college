const express = require("express");
const app = express();
const userController = require("../controller/user.controller.js");
const userMiddleware = require("../middlewares/user.middleware.js");
const router = express.Router();

router.get("/signin", userMiddleware.validUser, userController.checkAuthToken);
router.post("/signup", userMiddleware.validInputs, userController.addUser);