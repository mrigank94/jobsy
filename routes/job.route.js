const {
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getAllJobs,
} = require("../controllers/job.controller");

module.exports = function (app) {
  app.post("/jobsy/api/v1/jobs", createJob);

  app.get("/jobsy/api/v1/jobs", getAllJobs);

  app.get("/jobsy/api/v1/jobs/:id", getJobById);

  app.put("/jobsy/api/v1/jobs/:id", updateJobById);

  app.delete("/jobsy/api/v1/jobs/:id", deleteJobById);
};
