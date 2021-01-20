const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  create
};

// function create(req, res) {
//   res.json({
//     user: {
//       name: req.body.name,
//       email: req.body.email
//     }
//   });
// }

async function create(req, res) {
  try {
    const user = await user.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24hr' }
  );
}