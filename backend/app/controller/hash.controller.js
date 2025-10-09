const crypto = require("crypto");
const { salt, iterations, keyLength, digest} = require("../config/hash.config")

async function generateHashedPassword(plainTextPassword) {
    const hash = crypto.pbkdf25ync(
        plainTextPassword,
        salt,
        iterations,
        keyLength,
        digest
    ).toString('hex');
    return hash;
    
}

module.exports = {
    generateHashedPassword
}