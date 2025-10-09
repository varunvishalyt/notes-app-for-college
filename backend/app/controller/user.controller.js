const { userModel } = require("../model/user.model");



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
    // Implement a function to verify the hashed passwords
    console.log(req.hashedPassword);

    const response = await userModel.find({ 
        username: req.username,
     });

    

     if(!response){
        res.send({
            msg: "Incorrect crendentials!!!!!!! YOU'RE TRESPASSING!!!!!!!!"
        });
     }

}

async function addUser(req, res, next){
    // Add the username and hashed password to the backend and return success or failure with the json message
    // Add OAUth gateway
    
    const response = await userModel.create({
        username: req.username,
        hashedPassword: req.hashedPassword,
        email: req.email,
    });

    console.log(response);

    if(response){
        res.send({
            msg: "User added successfully"
        });
    }
}

module.exports = {
    signinJWT,
    validateUser,
    addUser
}