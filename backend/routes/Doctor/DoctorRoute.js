const express = require('express');
const router = express.Router();
const DoctorLogin = require('../../controllers/Doctor/DoctorLogin')
const DocSchedule = require('../../controllers/Doctor/AddScedule')

//Doctor Login
router.post('/doctor/login', DoctorLogin.DoctorLogin)

//Doctors Schedule
router.post('/doctor/schedule/add', DocSchedule.addSchedule)
router.get('/doctor/schedules', DocSchedule.getAllShedule)
router.get('/doctor/schedules/:id', DocSchedule.getSingleShedule)
router.patch('/doctor/schedule/edit/:id', DocSchedule.editShedule)
router.delete('/doctor/schedule/delete/:id', DocSchedule.deleteShedule)



module.exports = router;