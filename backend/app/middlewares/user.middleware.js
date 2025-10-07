function validUser(req, res, next){
    // Check if user has an account present on this platform, if yes then pass in the username in the req.username field(?)
    // Separate this into a different file



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