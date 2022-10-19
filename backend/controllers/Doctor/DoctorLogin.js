const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const DoctorModel = require('../../model/Admin/RegisterDoc')

exports.DoctorLogin = async (req, res, next) =>{

    const { email, password } = req.body;

    const findUser = await DoctorModel.findOne({email})

    if(!findUser){
        return res.status(500).json({message: "no user found"})
    }

    if(findUser.status !== true){
        return res.status(500).json({message: "account is disabled"})
    }

    try {
        if(findUser && (await bcrypt.compare(password, findUser.password))){
            const token = jwt.sign({id: findUser._id}, process.env.SECRET_CODE_1, {expiresIn: "1hr"})
            res.status(200).json({message: "success", token})
        }else{
            res.status(500).json({message: "invalid credentials"})
        }
        
    } catch (error) {
        console.log(error);
    }


}