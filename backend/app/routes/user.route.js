const express = require("express");
const app = express();
const userController = require("../controller/user.controller.js");
const userMiddleware = require("../middlewares/user.middleware.js");
const router = express.Router();

router.get("/test", (req, res, next) =>{
    res.json({
        msg: "This is a test message"
    });
})
router.get("/signin", userMiddleware.validUser, userController.checkAuthToken);
router.post("/signup", userMiddleware.validInputs, userController.addUser);

module.exports = router