const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  job: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Job",
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  noticePeriod: {
    type: Number,
    required: true,
  },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
