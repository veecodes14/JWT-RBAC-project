const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
    username : {
        type: String,
        required: true,
        unique: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        reqired: true
    },
    role: {
        type: String,
        reqired: true,
        enum: ["admin", "manager", "user"]
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema)