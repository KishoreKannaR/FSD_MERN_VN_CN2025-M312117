const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const userCtrl = require("../controllers/userController");

const router = express.Router();

router.post("/register", userCtrl.registerController);
router.post("/login", userCtrl.loginController);
router.post("/getuser", auth, userCtrl.authController);
// userRoutes.js
router.get("/profile", auth, userCtrl.getProfileController);


// User's appointments
router.get("/appointments", auth, userCtrl.getMyAppointments);

// NEW ROUTE
router.get("/getalldoctors", auth, userCtrl.getAllDoctorsController);



router.post(
  "/book-appointment",
  auth,
  upload.single("document"),
  userCtrl.bookAppointmentController
);

const {
  applyDoctorController,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");


// APPLY DOCTOR
router.post(
  "/apply-doctor",
  authMiddleware,
  applyDoctorController
);

module.exports = router;
