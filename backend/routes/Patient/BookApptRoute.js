const express = require("express");
const router = express.Router();
const BookAppointmentModel = require('../../controllers/Patient/BookAppointment')

router.post('patient/appoint/add', BookAppointmentModel.addAppointment)
router.get('patient/appoint/get', BookAppointmentModel.getAppointments)
router.get('patient/appoint/get/:id', BookAppointmentModel.getSingleAppointment)
router.patch('patient/appoint/edit/:id', BookAppointmentModel.getAppointments)
router.delete('patient/appoint/delete/:id', BookAppointmentModel.deleteAppointment)
router.patch('/appointment/status/:id',  BookAppointmentModel.cancelAppointment)

module.exports = router;