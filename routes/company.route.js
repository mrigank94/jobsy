const {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} = require("../controllers/company.controller");
const { isAdmin } = require("../middlewares/authJwt");

module.exports = function (app) {
  app.post("/jobsy/api/v1/companies", [isAdmin], createCompany);

  app.get("/jobsy/api/v1/companies/:id", getCompanyById);

  app.put("/jobsy/api/v1/companies/:id", updateCompanyById);

  app.delete("/jobsy/api/v1/companies/:id", deleteCompanyById);
};
