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
  res.json(yuppies);
}

async function create(req, res) {
  const yuppie = await Yuppie.create(req.body);
  res.json(yuppie);
}

async function show(req, res) {
  const yuppie = await Yuppie.findById(req.params.id);
  res.json(yuppie);
}

async function update(req, res) {
  const updatedYuppie = await Yuppie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedYuppie);
}

async function deleteOne(req, res) {
  const deletedYuppie = await Yuppie.findByIdAndRemove(req.params.id);
  res.json(deletedYuppie)
}