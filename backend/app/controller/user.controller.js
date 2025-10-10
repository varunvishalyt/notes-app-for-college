const { userModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/controller.config");
const argon2 = require("argon2");

function signinEndpoint(req, res, next){
    const payload = {
        username: req.username,
        email: req.email
    }

    const token = jwt.sign(payload, jwtSecret);
    
    res.json({
        msg: "User was successfully signed in",
        token: token
    });
}

async function addUser(req, res, next){
    // Add the username and hashed password to the backend and return success or failure with the json message
    // Add OAUth gateway
    
    const response = await userModel.create({
        username: req.username,
        hashedPassword: req.hashedPassword,
        email: req.email,
    });

    if(response){
        res.send({
            msg: "User added successfully"
        });
    }
}

module.exports = {
    signinEndpoint,
    addUser
}