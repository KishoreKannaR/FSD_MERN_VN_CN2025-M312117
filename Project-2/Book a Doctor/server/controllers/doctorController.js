const Appointment = require("../models/AppointmentModel");
const Doctor = require("../models/DoctorModel");

/**
 * GET doctor appointments
 * Doctor is identified via req.user (from auth middleware)
 */
exports.getDoctorAppointments = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user });

    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "Doctor profile not found",
      });
    }

    const appointments = await Appointment.find({
      doctorId: doctor._id,
    })
      .populate("userId", "fullName phone email")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      appointments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


/**
 * UPDATE appointment status
 * approve | reject | completed
 */
exports.handleAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;

    if (!appointmentId || !status) {
      return res.status(400).send({
        success: false,
        message: "Appointment ID and status are required",
      });
    }

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "Appointment not found",
      });
    }

    // Only allow changing status if it's active
    if (!["pending", "approved"].includes(appointment.status)) {
      return res.status(400).send({
        success: false,
        message: "Cannot change status of completed/rejected/cancelled appointment",
      });
    }

    appointment.status = status;
    await appointment.save();

    res.status(200).send({
      success: true,
      message: "Appointment status updated",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
