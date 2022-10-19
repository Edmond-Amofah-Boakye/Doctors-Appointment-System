const express = require('express')
const router = express.Router()
const AdminLogin = require('../../controllers/Admin/AdminLogin')
const AdminSignup = require('../../controllers/Admin/AdminSignup')
const upload = require('../../middleware/Upload')


router.post('/admin/login', AdminLogin.AdminLogin)
router.post('/admin/register', upload.single('image'), AdminSignup.AdminSignup)
router.get('/admin/alladmin',  AdminSignup.getAllAdmin)
router.get('/admin/alladmin/:id',  AdminSignup.getSingleAdmin)
router.put('/admin/:id',  upload.single('image'), AdminSignup.editAdmin)
router.delete('/admin/:id',  AdminSignup.deleteAdmin)

module.exports = router ;