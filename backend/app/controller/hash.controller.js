const crypto = require("crypto");
const { salt, iterations, keyLength, digest} = require("../config/hash.config")

async function generateHashedPassword(params) {
    const hash = crypto.pbkdf25ync(
        password,
        salt,
        iterations,
        keyLength,
        digest
    ).toString('hex');
    return hash;
    
}