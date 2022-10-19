const bcrypt = require('bcryptjs')
const SignupModel = require('../../model/Admin/Signup')

exports.AdminSignup = async(req, res, next) =>{
    const {email, password, fullname, address, contact } = req.body
    
    const profile = req.file.path

    const findUser = await SignupModel.findOne({email})

    try {

        if(findUser){
            return res.status(401).json({message: 'user already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newAdmin = new SignupModel({
            fullname,
            email,
            password: hashedPassword,
            contact,
            address,
            profile
        })

        await newAdmin.save()

        if(newAdmin){
            return res.status(201).json({message: 'successfully created an admin', newAdmin})
        }

        res.status(401).json({message: 'could not create new admin'})
        
    } catch (error) {
        console.log(error);
    }
}


exports.getAllAdmin = async(req, res, next) =>{
    try {
        const allAdmin = await SignupModel.find();

        if(!allAdmin){
            return res.status(200).json({message: "no admin found"})
        }

        res.status(200).json({message: 'user found', allAdmin})

    } catch (error) {
        console.log(error);
    }
}

exports.getSingleAdmin = async(req, res, next) =>{
    try {
        const findAdmin = await SignupModel.findById(req.params.id);

        if(!findAdmin){
            return res.status(200).json({message: "no admin found"})
        }

        res.status(200).json({message: 'user found', findAdmin})

    } catch (error) {
        console.log(error);
    }
}

exports.editAdmin = async(req, res, next) =>{
    const { password } = req.body;
    
    try {
        const findAdmin = await SignupModel.findById(req.params.id);

        if(!findAdmin){
            return res.status(401).json({message: "no admin found"})
        }

        const hashedPassword = bcrypt.hash(password, 12)

        findAdmin.fullname = req.body.fullname
        findAdmin.email = req.body.email
        findAdmin.password = hashedPassword
        findAdmin.fullname = req.body.contact
        findAdmin.address = req.body.address
        findAdmin.profile = req.file.path

        await findAdmin.save()

        res.status(201).json({message: 'Succesfully updated Admin Profile', findAdmin})

    } catch (error) {
        console.log(error);
    }
}

exports.deleteAdmin = async(req, res, next) =>{
    try {

        const deleteAdmin = await SignupModel.findByIdAndDelete(req.params.id)

        if(!deleteAdmin){

            res.status(400).json({message:'could not delete Admin'})
        }

        res.status(201).json({message:'Admin deleted successfully'})
        
    } catch (error) {
        
    }
}