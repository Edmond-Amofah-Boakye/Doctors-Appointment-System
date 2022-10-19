const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.AdminLogin = async(req, res, next)=>{
    const AdminModel = require('../../model/Admin/Signup')

    const { email, password } = req.body;

    try {
       const findAdmin = await AdminModel.findOne({email}) 

       if(!findAdmin){
           return res.status(401).json({message: "user do not exist, sign up"})
       }

       if(findAdmin && (await bcrypt.compare(password, findAdmin.password))){

        const token = jwt.sign({id: findAdmin._id}, process.env.SECRET_CODE, {expiresIn: '1h'})
        res.status(201).json({message: "succesfully signed in", token})
        
       }else{
        res.status(401).json({message: "Invalid Credentials"})
       }
       
    } catch (error) {
        console.log(error);
    }




}