const Job = require("../models/job.model");

async function createJob(req, res) {
  const job = await Job.create(req.body);
  res.status(201).send(job);
}

async function getJobById(req, res) {
  const id = req.params.id;

  try {
    const job = await Job.findById(id);
    res.status(200).send(job);
  } catch (ex) {
    res.status(404).send({
      message: `Job with ID ${id} does not exist`,
    });
  }
}

async function updateJobById(req, res) {
  const id = req.params.id;

  await Job.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Job with ID ${id} updated successfully`,
  });
}

async function deleteJobById(req, res) {
  const id = req.params.id;

  await Job.findByIdAndDelete(id);

  res.status(200).send({
    message: `Job with ID ${id} updated successfully`,
  });
}

async function getAllJobs(req, res) {
  const jobs = await Job.find({});
  res.send(jobs);
}

module.exports = {
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getAllJobs,
};
