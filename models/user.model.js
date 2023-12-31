const mongoose = require("mongoose");
const { USER_STATUS, USERTYPES } = require("../constants");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 10,
  },
  userStatus: {
    type: String,
    required: true,
    default: USER_STATUS.PENDING,
  },
  userType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
