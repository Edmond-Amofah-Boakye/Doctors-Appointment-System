const express = require('express')
const router = express.Router()
const upload = require('../../middleware/Upload')
const RegisterDoctor = require('../../controllers/Admin/RegisterDoc')

router.post('/register/doctor', upload.single('image'), RegisterDoctor.RegisterDoctor)
router.get('/doctors', RegisterDoctor.getDoctor)
router.get('/doctor/:id', RegisterDoctor.getSingleDoctor)
router.put('/doctor/edit/:id', upload.single('image'), RegisterDoctor.editDoctor)
router.delete('/doctor/delete/:id', RegisterDoctor.deleteDoctor)
router.patch('/doctor/status/:id', RegisterDoctor.changeStatus)


module.exports = router;