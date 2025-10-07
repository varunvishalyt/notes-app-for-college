const jwt = require("jsonwebtoken")
const jwtSecret = env.JWT_SECRET;
const mongoose = require("mongoose");
const { userModel } = require("../model/user.model")


function signinJWT(req, res, next){
    const payload = {
        username: req.username
    }
    const token = jwt.sign(payload, jwtSecret);

    res.json({
        jwt: token
    })
}

//This function will (for now) check if the token is signed with the right secret and in the future it can check if the token is expired or not
function checkAuthToken(req, res, next){
    jwt.verify(req.token, jwtSecret, (err, decoded) => {
        if(!decoded){
            res.status(422).json({
                msg: "Token invalid",
                errorMessage: err
            })
        }
        else{
            res.json({
                valid: true
            })
        }
    });
}

async function addUser(req, res, next){
    // Add the username and hashed password to the backend and return success or failure with the json message
    // Add OAUth gateway
    
    await userModel.create({
        username: req.username,
        email: req.email,

    })
}

module.exports = {
    signinJWT,
    checkAuthToken,
    addUser
}