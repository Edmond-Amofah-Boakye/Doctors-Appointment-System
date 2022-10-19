const bcrypt = require('bcryptjs')
const DoctorModel = require('../../model/Admin/RegisterDoc')

exports.RegisterDoctor = async(req, res, next) =>{

    const { email, password, fullname, speciality, contact, dob, address, gender } = req.body

    const profile = req.file.path;

    const findDoctor = await DoctorModel.findOne({email})

    if(findDoctor){
        return res.status(500).json({message: "user already exist"})
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 12)

        const createDoctor = new DoctorModel({
            fullname, 
            email, 
            password: hashedPassword, 
            speciality, 
            contact, 
            dob, 
            address, 
            gender, 
            profile
        })

        await createDoctor.save()

        if(createDoctor){
            return res.status(201).json({message: "successfully created user", createDoctor})
        }

        return res.status(401).json({message: "could not create new user"})

        
    } catch (error) {
        console.log(error);
    }

}


exports.getDoctor = async(req, res, next)=>{
    try {
        const findDoctors = await DoctorModel.find()
        if(!findDoctors){
            return res.status(400).json({message: "no user found"})
        }
        return res.status(200).json({message: "success", findDoctors})
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleDoctor = async(req, res, next)=>{
    try {
        const getDoctor = await DoctorModel.findById(req.params.id)
        if(!getDoctor){
            return res.status(400).json({message: "no user found"})
        }
        return res.status(200).json({message: "success", getDoctor})
    } catch (error) {
        console.log(error);
    }
}

exports.editDoctor = async(req, res, next)=>{

    const { password } = req.body
    try {
        const getADoctor = await DoctorModel.findById(req.params.id)

        if(!getADoctor){
            return res.status(400).json({message: "no user found"})
        }

        if(getADoctor.createdBy.toString() !== req.user.id){
            
            return res.status(403).json({message: "Not Authorised to Delete"})
        }

        const hashedPassword = bcrypt.hash(password, 12)

        getADoctor.fullname = req.body.fullname;
        getADoctor.email = req.body.email;
        getADoctor.password = hashedPassword;
        getADoctor.speciality = req.body.speciality;
        getADoctor.contact = req.body.contact;
        getADoctor.dob = req.body.dob;
        getADoctor.address = req.body.address;
        getADoctor.gender = req.body.gender;
        getADoctor.profile = req.body.profile;

        await getADoctor.save()

        return res.status(200).json({message: "success", getADoctor})

    } catch (error) {
        console.log(error);
    }
}

exports.deleteDoctor = async(req, res, next)=>{

    const findUser = await SignupModel.findById(req.params.id)
    try {

        if(!findUser){
            return res.status(400).json({message: "No user found"})
        }

        if(findUser.createdBy.toString() !== req.user.id){

            return res.status(403).json({message: "Not Authorised to Delete"})
        }

        const deleteDoctor = await SignupModel.findByIdAndDelete(req.params.id)

        if(!deleteDoctor){
            res.status(400).json({message:'could not delete Admin'})
        }

        res.status(201).json({message:'Admin deleted successfully'})
        
    } catch (error) {
        console.log(error);
    }
}

exports.changeStatus = async(req, res, next) => {

    const findStatus = await DoctorModel.findById(req.params.id)

    if(!findStatus){
        return res.status(500).json({message: "no user found"})
    }
    try {

        findStatus.status = !findStatus.status;

        const updateStatus = await findStatus.save()
    
        return res.status(201).json({message: "success", updateStatus})
        
    } catch (error) {
        console.log(error);
    }
}