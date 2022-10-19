const mongoose = require('mongoose')

const AdminSignup = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        required: true
    },

    email:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },

    password:{
        type: String,
        trim: true,
        required: true
    },

    contact:{
        type: Number,
        trim: true,
        required: true
    },

    address:{
        type: String,
        trim: true,
        required: true
    },

    profile:{
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('RegisterAdmin', AdminSignup)