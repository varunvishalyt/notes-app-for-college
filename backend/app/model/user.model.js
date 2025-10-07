// We will use the model data structure provided by mongoose to do this itself

const mongoose = require("mongoose")
const { userSchema } = require("./schemas/user.schema")

const userModel = mongoose.model("Users", userSchema)

module.exports = {
    userModel
}