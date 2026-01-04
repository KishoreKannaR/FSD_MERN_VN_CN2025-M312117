const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const doctorCtrl = require("../controllers/doctorController");

// Get all appointments for logged-in doctor
router.get(
  "/getdoctorappointments",
  auth,
  doctorCtrl.getDoctorAppointments
);

//  Approve / Reject / Complete appointment
router.post(
  "/handlestatus",
  auth,
  doctorCtrl.handleAppointmentStatus
);

module.exports = router;
