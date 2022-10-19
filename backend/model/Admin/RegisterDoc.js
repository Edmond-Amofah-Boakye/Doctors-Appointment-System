const mongoose = require('mongoose')

const RegisterDoctor = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        required: true
    },

    email:{
        type: String,
        trim: true,
        required: true
    },

    password:{
        type: String,
        trim: true,
        required: true
    },

    speciality:{
        type: String,
        trim: true,
        required: true
    },

    contact:{
        type: Number,
        trim: true,
        required: true
    },

    dob:{
        type: Date,
        trim: true,
        required: true
    },

    address:{
        type: String,
        trim: true,
        required: true
    },

    gender:{
        type: String,
        trim: true,
        required: true
    },

    profile:{
        type: String,
        trim: true,
        required: true
    },

    status:{
        type: Boolean,
        default: true
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RegisterAdmin"
    },

    appointments:[{type: mongoose.Schema.Types.ObjectId, ref: "BookAppointment"}]

}, {timestamps: true})

module.exports = mongoose.model('RegisterDoctor', RegisterDoctor)