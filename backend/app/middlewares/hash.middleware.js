const argon2 = require("argon2");
const { userModel } = require("../model/user.model");

async function validateUser(req, res, next) {
    const response = await userModel.find({ 
        username: req.username,
     });

    // If the user doesn't exists 
    if(response.length == 0){
        res.status(404).send({
            msg: "The user does not exist"
        });
        return;
     }
    // If it does then validate the password
    req.passCheck = await argon2.verify(response[0].hashedPassword, req.password);

    next();
}


module.exports = {
    validateUser
}