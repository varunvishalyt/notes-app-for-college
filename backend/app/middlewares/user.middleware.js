const { userModel } = require("../model/user.model")
const { signinBody } = require("../types/user.type")

async function validUser(req, res, next){
    // See if there is a token field, if yes then decode the token and check to see if it is valid
    // If no token provided then check against the username and passowrd
    const { tokenPresent } = req.body
    if(!tokenPresent){

    }


    next();
}

function validInputs(req, res, next){
    // check if the username and password schema match if not then send an error
    if(!signinBody.safeParse(req.body).success){
        res.status(400).send({
            msg: "The schema of body was malformed, check the correct schematics for sending the body"
        })
    }
    req.username = req.body.username;
    req.password = req.body.password;
    req.email = req.body.email;
    
    next();
}

module.exports = {
    validUser,
    validInputs
}