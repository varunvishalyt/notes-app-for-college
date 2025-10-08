// A file which loads the dbUrl from the env file or if not provided gives a generic url
const env = require("dotenv");

module.exports = {
    dbBaseUrl: env.DB_BASE_URL || "mongodb+srv://varunvishalyt:varun12345@cluster0.zfloyzx.mongodb.net/"
}