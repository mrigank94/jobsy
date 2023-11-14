const Company = require("../models/company.model");

async function createCompany(req, res) {
  const company = await Company.create(req.body);
  res.status(201).send(company);
}

async function getCompanyById(req, res) {
  const id = req.params.id;

  try {
    const company = await Company.findById(id);
    res.status(200).send(company);
  } catch (ex) {
    res.status(404).send({
      message: `Company with ID ${id} does not exist`,
    });
  }
}

async function updateCompanyById(req, res) {
  const id = req.params.id;

  await Company.findByIdAndUpdate(id, req.body);

  res.status(200).send({
    message: `Company with ID ${id} updated successfully`,
  });
}

async function deleteCompanyById(req, res) {
  const id = req.params.id;

  await Company.findByIdAndDelete(id);

  res.status(200).send({
    message: `Company with ID ${id} deleted successfully`,
  });
}

module.exports = {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
};
