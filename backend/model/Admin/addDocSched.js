const mongoose = require("mongoose");

const docScheduleAdminModel = new mongoose.Schema({
    doctorName:{
        type: String,
        required: [true, "name required"],
        trim: true
    },

    scheduleDate:{
        type: Date,
        required: [true, "schedule date cannot be empty"]
    },

    startTime: {
        type: String,
        required: [true, " start time cannot be empty"]
    },

    endTime: {
        type: String,
        required: [true, "end time cannot be empty"]
    }
})

module.exports = mongoose.model("DocScheduleAdmin", docScheduleAdminModel);