const express = require("express");
const app = express();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middlewares/user.middleware");
const hashMiddleware = require("../middlewares/hash.middleware");
const { dbUrl } = require("../config/db.config");

const router = express.Router();

router.get("/test", (req, res, next) =>{
    res.json({
        msg: "hello"
    });
})
router.get("/signin", userMiddleware.validInputsSignin, hashMiddleware.validateUser, userController.signinEndpoint);
router.post("/signup", userMiddleware.validInputsSignUp, userMiddleware.userExists, userController.addUser);


module.exports = router