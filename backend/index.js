const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const path = require("path")

//requiring routes
const AdminRoute = require('./routes/Admin/AdminRoute')
const RegDocRoute = require('./routes/Admin/RegisterDocRoute')
const DoctorRoute = require('./routes/Doctor/DoctorRoute')
const PatientRoute = require('./routes/Patient/PatientRoute')
const AdminSchedule = require('./routes/Admin/AddScheduleRoute')

// const loginRoute = require('./route/login')


//requiring express
app.use(express.json())

//serving static files
app.use("/images", express.static(path.join(__dirname, 'images')))

//using cors
app.use(cors())

//routes middleware
app.use(AdminRoute)
app.use(RegDocRoute)
app.use(DoctorRoute)
app.use(PatientRoute)
app.use(AdminSchedule)
// app.use(commentRoute)



mongoose.connect(process.env.MONGODB_URL, ((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('database connected succesfully');
    }
   
}))

app.listen(process.env.PORT, (()=>{
    console.log("app has succesfully started on " + process.env.PORT);
}))