const {
  createApplication,
  getApplicationById,
  updateApplicationById,
  deleteApplicationById,
  getAllApplicationsByUserId,
  getAllApplicationsByJobId,
} = require("../controllers/applicant.controller");

module.exports = function (app) {
  app.post("/jobsy/api/v1/applications", createApplication);

  app.get("/jobsy/api/v1/applications/:id", getApplicationById);

  app.put("/jobsy/api/v1/applications/:id", updateApplicationById);

  app.delete("/jobsy/api/v1/applications/:id", deleteApplicationById);

  app.get("/jobsy/api/v1/applications/user/:id", getAllApplicationsByUserId);

  app.get("/jobsy/api/v1/applications/job/:id", getAllApplicationsByJobId);
};
