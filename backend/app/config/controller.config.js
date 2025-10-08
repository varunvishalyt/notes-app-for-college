const env = require("dotenv");

module.exports = {
    jwtSecret: env.JWT_SECRET | "secret"
}