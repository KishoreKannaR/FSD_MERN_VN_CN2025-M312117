const express = require("express");

const { getAllAppointments, getAllUsersController, getAllDoctorsController,
     updateDoctorStatusController, } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/appointments", authMiddleware, getAllAppointments);

/**
 * GET all users (non-doctors)
 */
router.get("/users", authMiddleware, getAllUsersController);

// GET all doctors
router.get("/doctors", getAllDoctorsController);

// UPDATE doctor status
router.post("/update-doctor-status", updateDoctorStatusController);

module.exports = router;
