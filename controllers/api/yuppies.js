const Yuppie = require('../../models/yuppie');

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne
};

async function index(req, res) {
  const yuppies = await Yuppie.find({});
  res.status(200).json(yuppies);
}

async function create(req, res) {
  const yuppie = await Yuppie.create(req.body);
  res.status(201).json(yuppie);
}

async function show(req, res) {
  const yuppie = await Yuppie.findById(req.params.id);
  res.status(200).json(yuppie);
}

async function update(req, res) {
  const updatedYuppie = await Yuppie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedYuppie);
}

async function deleteOne(req, res) {
  const deletedYuppie = await Yuppie.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedYuppie)
}