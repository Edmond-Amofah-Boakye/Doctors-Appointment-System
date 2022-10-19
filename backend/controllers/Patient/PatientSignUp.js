const bcrypt = require("bcryptjs");
const PatientModel = require("../../model/Patient/SignUp");

exports.PatientSignup = async (req, res, next) => {
  const {
    email,
    password,
    fullname,
    studentNumber,
    age,
    gender,
    program,
    address,
    contact,
  } = req.body;

  const findUser = await PatientModel.findOne({ email });

  try {
    if(findUser) {
      return res.status(401).json({ message: "user already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newPatient = new PatientModel({
      fullname,
      email,
      password: hashedPassword,
      studentNumber,
      contact,
      age,
      gender,
      program,
      address,
    });

    await newPatient.save();

    if (newPatient) {
      return res
        .status(201)
        .json({ message: "successfully created an admin", newPatient });
    }

    res
    .status(401)
    .json({ message: "could not create new admin" });

  } catch (error) {
    console.log(error);
  }
};

exports.getAllPatients = async (req, res, next) => {
  try {
    const allPatient = await PatientModel.find();

    if (!allPatient) {
      return res.status(200).json({ message: "no admin found" });
    }

    res.status(200).json({ message: "user found", allPatient });
  } catch (error) {
    console.log(error);
  }
};

exports.getSinglePatient = async (req, res, next) => {
  try {
    const findPatient = await PatientModel.findById(req.params.id);

    if (!findPatient) {
      return res.status(200).json({ message: "no admin found" });
    }

    res.status(200).json({ message: "user found", findPatient });
  } catch (error) {
    console.log(error);
  }
};

exports.editPatient = async (req, res, next) => {

  const { password } = req.body;
  try {
    const findPatient = await PatientModel.findById(req.params.id);

    if (!findPatient) {
      return res.status(401).json({ message: "no admin found" });
    }

    const hashedPassword = bcrypt.hash(password, 12)

    findPatient.fullname = req.body.fullname;
    findPatient.email = req.body.email;
    findPatient.password = hashedPassword;
    findPatient.studentNumber = req.body.studentNumber;
    findPatient.contact = req.body.contact;
    findPatient.age = req.body.age;
    findPatient.gender = req.body.gender;
    findPatient.program = req.body.program;
    findPatient.address = req.body.address;

    await findPatient.save();

    res
      .status(201)
      .json({ message: "Succesfully updated Admin Profile", findPatient });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePatient = async (req, res, next) => {
  try {
    const deletePatient = await PatientModel.findByIdAndDelete(req.params.id);

    if (!deletePatient) {
      res.status(400).json({ message: "could not delete Admin" });
    }

    res.status(201).json({ message: "Admin deleted successfully" });
  } catch (error) {}
};


