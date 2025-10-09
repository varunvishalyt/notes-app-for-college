const argon2 = require("argon2");

async function hashThePassword(req, res, next) {
    const hashedPassword = await argon2.hash(req.password);
    req.hashedPassword = hashedPassword;
    next();    
}


module.exports = {
    hashThePassword
}