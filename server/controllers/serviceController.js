const asyncHandler = require('express-async-handler');
const Service = require('../models/serviceModel');

const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.findAll();
  res.json(services);
});

const createService = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const service = await Service.create({ name, description });

  res.status(201).json(service);
});

module.exports = { getAllServices, createService };
