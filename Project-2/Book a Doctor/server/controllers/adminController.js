const Appointment = require("../models/AppointmentModel");

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId", "fullName email phone")
      .populate("doctorId", "fullName specialization")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      total: appointments.length,
      appointments: appointments.map((a) => ({
        _id: a._id,

        userName: a.userId?.fullName,
        userEmail: a.userId?.email,
        userPhone: a.userId?.phone,

        doctorName: a.doctorId?.fullName,
        doctorSpecialization: a.doctorId?.specialization,

        date: a.date,
        time: a.time,
        status: a.status,
        createdAt: a.createdAt,
      })),
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const User = require("../models/UserModel");

/**
 * GET all normal users (NOT doctors)
 * type === "user"
 */
exports.getAllUsersController = async (req, res) => {
  try {
    const users = await User.find({
      role: "user",
      isdoctor: false, // ONLY normal users
    })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const Doctor = require("../models/DoctorModel");

/**
 * GET all doctors for admin dashboard
 * Returns all doctors with relevant info
 */
exports.getAllDoctorsController = async (req, res) => {
  try {
    // Fetch all doctors
    const doctors = await Doctor.find()
      .sort({ createdAt: -1 }); // latest first

    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

/**
 * UPDATE doctor status (approve / reject)
 */
exports.updateDoctorStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;

    if (!doctorId || !status) {
      return res.status(400).send({
        success: false,
        message: "Doctor ID and status are required",
      });
    }

    // Only allow valid status values
    const validStatuses = ["pending", "approved", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).send({
        success: false,
        message: `Status must be one of: ${validStatuses.join(", ")}`,
      });
    }

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor not found",
      });
    }

    // Update status — no restrictions
    doctor.status = status;
    await doctor.save();

    res.status(200).send({
      success: true,
      message: `Doctor status updated to ${status}`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
