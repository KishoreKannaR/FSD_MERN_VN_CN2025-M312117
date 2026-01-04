const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    fullName: {
      type: String,
      required: true,
      set: v => v.charAt(0).toUpperCase() + v.slice(1)
    },
    email: String,
    phone: String,
    address: String,
    specialization: String,
    experience: String,
    fees: Number,
    timings: Array,
    status: {
      type: String,
      default: "pending" // pending | approved | rejected
    }
  },
  { timestamps: true }
);
module.exports = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);

