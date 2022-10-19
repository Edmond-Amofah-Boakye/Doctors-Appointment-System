const express = require("express");
const router = express.Router();
const AdminSchedule = require("../../controllers/Admin/AddScedule")


//Add Schedule
router.post('/admin/schedule/add', AdminSchedule.addSchedule)
router.get('/admin/schedule/all', AdminSchedule.getSchedules)
router.get('/admin/schedule/:id', AdminSchedule.getSingleSchedule)
router.patch('/admin/schedule/edit/:id', AdminSchedule.editSchedule)
router.delete('/admin/schedule/delete/:id', AdminSchedule.deleteSchedule)





module.exports = router;