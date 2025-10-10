// A file which loads the dbUrl from the env file or if not provided gives a generic url
const env = require("dotenv");

module.exports = {
    dbUrl: process.env.DB_URL || "mongodb://127.0.0.1:27017/notes-app"
}