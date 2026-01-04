const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    // 🔗 References
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    // 📌 Snapshot of USER at booking time
    userInfo: {
      fullName: String,
      email: String,
      phone: String,
    },

    // 📌 Snapshot of DOCTOR at booking time
    doctorInfo: {
      fullName: String,
      specialization: String,
      email: String,
      phone: String,
      address: String,
      fees: Number,
    },

    // 📅 Appointment details
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed", "cancelled"],
      default: "pending",
    },

    document: {
      type: String, // file path or URL
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
