const Applicant = require("../models/applicant.model");

async function createApplication(req, res) {
  const application = await Applicant.create(req.body);
  res.status(201).send(application);
}

async function updateApplicationById(req, res) {
  const id = req.params.id;

  await Applicant.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Application with ID ${id} updated successfully`,
  });
}

async function deleteApplicationById(req, res) {
  const id = req.params.id;

  await Applicant.findByIdAndDelete(id);

  res.status(200).send({
    message: `Application with ID ${id} updated successfully`,
  });
}

async function getAllApplicationsByJobId(req, res) {
  const jobId = req.params.id;

  const applications = await Applicant.find({ jobId: jobId });
  res.status(200).send(applications);
}

async function getAllApplicationsByUserId(req, res) {
  const userId = req.params.id;

  const applications = await Applicant.find({ userId: userId });
  res.status(200).send(applications);
}

async function getApplicationById(req, res) {
  const id = req.params.id;

  try {
    const application = await Applicant.findById(id);
    res.status(200).send(application);
  } catch (ex) {
    res.status(404).send({
      message: `Application with ID ${id} does not exist`,
    });
  }
}

module.exports = {
  createApplication,
  updateApplicationById,
  deleteApplicationById,
  getAllApplicationsByJobId,
  getAllApplicationsByUserId,
  getApplicationById,
};
