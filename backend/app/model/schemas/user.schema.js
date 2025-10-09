const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = {
    userSchema
}