const mongoose = require("mongoose");

const docScheduleModel = new mongoose.Schema({
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

module.exports = mongoose.model("DocSchedule", docScheduleModel);