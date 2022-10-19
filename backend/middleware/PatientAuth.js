const jwt = require('jsonwebtoken')
const PatientModel = require('../model/Patient/SignUp')

const PatientAuth = async(req, res, next) =>{
    const header = req.header["Authorization"];

    if(!header){
        return res.status(400).json({message: "failed"})
    }

    try {
        const token = header.split("")[1]

        if(!token){
            return res.status(400).json({message: "No token found"})
        }

        const decode = jwt.verify(token, process.env.SECRET_CODE_2)

        req.patient = await PatientModel.findById(decode.id).select("-password")
        next()

    } catch (error) {
        console.log(error);
    }
}

module.exports = PatientAuth;