const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Company",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  minExpRequired: {
    type: Number,
    default: 0,
  },
  jobType: {
    type: String,
  },
  numberOfApplicants: {
    type: Number,
  },
  location: {
    type: String,
    required: true,
  },
  ctc: {
    type: Number,
  },
  isRemote: {
    type: Boolean,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
