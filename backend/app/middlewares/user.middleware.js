const { userModel } = require("../model/user.model")

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
    next();
}

module.exports = {
    validUser,
    validInputs
}