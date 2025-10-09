const express = require("express");
const app = express();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middlewares/user.middleware");
const hashMiddleware = require("../middlewares/hash.middleware")
const router = express.Router();

router.get("/test", (req, res, next) =>{
    res.json({
        msg: "This is a test message"
    });
})
router.get("/signin", userMiddleware.validInputsSignin, hashMiddleware.hashThePassword, userController.validateUser);
router.post("/signup", userMiddleware.validInputsSignUp, userMiddleware.userExists, hashMiddleware.hashThePassword, userController.addUser);


module.exports = router