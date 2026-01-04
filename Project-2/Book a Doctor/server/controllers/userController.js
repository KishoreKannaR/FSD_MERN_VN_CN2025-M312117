const User = require("../models/UserModel");
const Doctor = require("../models/DoctorModel");
const Appointment = require("../models/AppointmentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerController = async (req, res) => {
  try {
    const { fullName, email, password, phone, role } = req.body;

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).send({ message: "User exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role, // user | admin
    });

    await user.save();

    res.status(201).send({
      success: true,
      message: "Registration successful",
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};


exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Create JWT (include role for authorization if needed later)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    // Remove password before sending user
    user.password = undefined;

    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isdoctor: user.isdoctor,
      },
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};

// userController.js
exports.getProfileController = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("fullName email");

    res.status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


// import Appointment from "../models/Appointment.js";

// GET logged-in user's appointments
exports.getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      userId: req.user,
    })
      .populate({
        path: "doctorId",
        select: "fullName specialization email phone",
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("getMyAppointments ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET all approved doctors (for users)
exports.getAllDoctorsController = async (req, res) => {
  try {
    // console.log("USER ID:", req.user);

    const doctors = await Doctor.find({ status: "approved" });
    // console.log("DOCTORS FOUND:", doctors.length);

    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.bookAppointmentController = async (req, res) => {
  try {
    const { doctorId, date, time, reason } = req.body;

    if (!doctorId || !date) {
      return res.status(400).send({
        success: false,
        message: "Doctor and date are required",
      });
    }

    //  logged-in user
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    const appointment = new Appointment({
      userId: user._id,
      doctorId: doctor._id,
      date,
      time: time || "Not specified",
      reason: reason || "General consultation",
      document: req.file ? req.file.path : null,
      status: "pending",
    });

    await appointment.save();

    res.status(201).send({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    console.error("BOOK APPOINTMENT ERROR:", error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


// const Doctor = require("../models/doctorModel");

/**
 * APPLY DOCTOR CONTROLLER
 * user must be logged in
 * role = user
 */
exports.applyDoctorController = async (req, res) => {
  try {
    const userId = req.user; // from auth middleware

    // prevent duplicate doctor application
    const existingDoctor = await Doctor.findOne({ userId });

    if (existingDoctor) {
      return res.status(400).send({
        success: false,
        message: "You have already applied as a doctor",
      });
    }

    const {
      fullName,
      email,
      phone,
      address,
      specialization,
      experience,
      fees,
      timings,
    } = req.body;

    const doctor = new Doctor({
      userId,
      fullName,
      email,
      phone,
      address,
      specialization,
      experience,
      fees,
      timings,
      status: "pending",
    });

    await doctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor application submitted successfully",
      doctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


exports.authController = async (req, res) => {
  const user = await User.findById(req.user);
  res.send({ success: true, user });
};