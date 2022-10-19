const mongoose = require('mongoose')

const PatientSignUp = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        required: true
    },

    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password:{
        type: String,
        trim: true,
        required: true
    },

    studentNumber:{
        type: Number,
        trim: true,
        required: true
    },

    contact:{
        type: Number,
        trim: true,
        required: true
    },

    age:{
        type: Number,
        trim: true,
        required: true
    },

    gender:{
        type: String,
        required: true
    },

    program:{
        type: String,
        trim: true,
        required: true
    },

    address:{
        type: String,
        trim: true,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('PatientSignUp', PatientSignUp)