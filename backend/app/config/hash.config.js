const env = require("dotenv");

module.exports = {
    salt : env.PASSWORD_SALT,
    iterations : env.ITERATIONS | 1000,
    keyLength : env.KEY_LENGTH | 64,
    digest : env.DIGEST | 'sha-512'
}