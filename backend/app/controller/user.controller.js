const { generateHashedPassword } = require("../controller/hash.controller");
// const jwt = require("jsonwebtoken")
// const { jwtSecret } = require("../config/controller.config");
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

async function validateUser(req, res, next){

    const response = await userModel.find({ 
        username: req.username,
     }).where('hashedPassword').equals(generateHashedPassword(req.password));

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
    validateUser,
    addUser
}