const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const PatientModel = require('../../model/Patient/SignUp')

exports.PatientLogin = async(req, res, next)=>{

    const { email, password } = req.body;

    try {
       const findPatient = await PatientModel.findOne({email}) 

       if(!findPatient){
           return res.status(401).json({message: "user do not exist, sign up"})
       }

       if(findPatient && (await bcrypt.compare(password, findPatient.password))){

        const token = jwt.sign({id: findPatient._id}, process.env.SECRET_CODE_2, {expiresIn: '1h'})
        res.status(201).json({message: "succesfully signed in", token})
        
       }else{
        res.status(401).json({message: "Invalid Credentials"})
       }
       
    } catch (error) {
        console.log(error);
    }

}