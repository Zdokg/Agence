const mongoose = require("mongoose");

const Login = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name1: {type: String, required: true},
    phone: {type: Number, required: true},
});

module.exports = mongoose.model("Login", Login);