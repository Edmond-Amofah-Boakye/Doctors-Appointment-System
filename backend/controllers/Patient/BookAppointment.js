const AppointmentModel = require('../../model/Patient/BookAppointment')

exports.addAppointment = async(req, res, next) => {

}

exports.getAppointments = async(req, res, next) => {

}

exports.getSingleAppointment = async(req, res, next) => {

}

exports.editAppointment = async(req, res, next) => {

}

exports.deleteAppointment = async(req, res, next) => {

}

exports.cancelAppointment = async (req, res, next) => {
    const findUser = await AppointmentModel.findById(req.params.id)
  
    if(!findUser){
      return res.status.json({message: "no user found"})
    }
  
    try {
      findUser.status = !findUser.status;
    
      const updateStatus = await findUser.save()
  
      return res.status(201).json({message: "success", updateStatus})
      
    } catch (error) {
      console.log(error);
    }
  }