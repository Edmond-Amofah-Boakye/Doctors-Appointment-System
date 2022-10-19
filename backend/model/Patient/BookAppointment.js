const mongoose = require("mongoose")

const BookAppointment = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        required: true
    },

    age:{
        type: Number,
        trim: true,
        required: true
    },

    appointmentDate:{
        type: Date,
        trim: true,
        required: true,
        immutable: true
    },

    problem:{
        type: String,
        trim: true,
        required: true
    },

    description:{
        type: String,
        trim: true,
        required: true
    },

    status:{
        type: Boolean,
        default: false
    },

    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RegisterDoctor"
    }

}, {timestamps: true})

module.exports = mongoose.model('BookAppointment', BookAppointment);