const { userModel } = require("../model/user.model")
const { signinBody, signUpBody } = require("../types/user.type")

async function userExists(req, res, next){
    
    // See if user already exists
    const response = await userModel.find({
        username: req.username,
        email: req.email
    });
    console.log(response);
    if(response.length > 0){
        res.status(404).send({
            msg: "This username and/or email already exists"
        })
    }

    next();

}

function validInputsSignin(req, res, next){
    // check if the username and password schema match if not then send an error
    if(!signinBody.safeParse(req.body).success){
        res.status(400).send({
            msg: "The schema of body was malformed, check the correct schematics for sending the sign in body"
        })
    }
    req.username = req.body.username;
    req.password = req.body.password;
    req.email = req.body.email;
    
    next();
}

async function validInputsSignUp(req, res, next){
    
    if(!signUpBody.safeParse(req.body).success){
        res.status(400).send({
            msg: "The schema of body was malformed, check the correct schematics for sending the sign up body"
        })
    }

    

    req.username = req.body.username;
    req.password = req.body.password;
    req.email = req.body.email;

    next();
}

module.exports = {
    userExists,
    validInputsSignin,
    validInputsSignUp,
}