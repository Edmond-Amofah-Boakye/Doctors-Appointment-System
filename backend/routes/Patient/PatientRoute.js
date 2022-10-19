const express = require('express')
const router = express.Router()
const PatientLogin = require('../../controllers/Patient/PatientLogin')
const PatientSignup = require('../../controllers/Patient/PatientSignUp')
const upload = require('../../middleware/Upload')


router.post('/patient/login', PatientLogin.PatientLogin)


router.post('/patient/register', upload.single('image'), PatientSignup.PatientSignup)
router.get('/patients',  PatientSignup.getAllPatients)
router.get('/patient/:id',  PatientSignup.getSinglePatient)
router.put('/patient/:id',  upload.single('image'), PatientSignup.editPatient)
router.delete('/patient/:id',  PatientSignup.deletePatient)


module.exports = router ;