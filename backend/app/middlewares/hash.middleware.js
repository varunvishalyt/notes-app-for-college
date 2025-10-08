const crypto = require("crypto");
const { salt, iterations, keyLength, digest} = require("../config/hash.config")


async function authenticatePassword(password, hashedPassword){
    const inputHash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex'); 
  return inputHash === hashedPassword;;
}


module.exports = {
    authenticatePassword
}