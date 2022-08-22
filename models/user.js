const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      maxLength: 32,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    encrypted_Password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default: "",
      trim: true,
    },
    contact: {
      type: Number,
    },
    role: {
      type: Number,
      default: 0,
    },
    userBio: {
      type: String,
      trim: true,
    },
    purchages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.method = {
  hashedPassword: (password) => {
    if (!password) return "";
    try {
      const salt = bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
