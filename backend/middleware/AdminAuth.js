const jwt = require('jsonwebtoken')
const AdminModel = require('../model/Admin/Signup')

const auth = (req, res, next) =>{

    const header = req.header['Authorization']
    
    if(!header){
        return res.status(500).json({message:"No Authenticated"})
    }

    try {
        const token = header.split('')[1]
        
        const decode = jwt.verify(token, process.env.SECRET_CODE)
    
        req.user = await AdminModel.findById(decode.id).select("-password")

        next()
        
    } catch (error) {

        return res.status(401).json({message: "verification not successful"})
    }
}

module.exports = auth;