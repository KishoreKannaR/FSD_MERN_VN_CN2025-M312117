const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      set: v => v.charAt(0).toUpperCase() + v.slice(1),
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user", // user | admin
    },

    isdoctor: {
      type: Boolean,
      default: false,
    },

    notification: {
      type: Array,
      default: [],
    },

    seennotification: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

