const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login
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
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function login(req, res) {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) throw new Error();
//     const match = await bcrypt.compare(req.body.password, user.password);
//     if (match) {
//       const token = createJWT(user);
//       res.json(token);
//     } else {
//       throw new Error();
//     }
//   } catch {
//     res.status(400).json('Invalid Credentials');
//   }
// }

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    await bcrypt.compare(req.body.password, user.password);
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json('Invalid Credentials');
  }
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24hr' }
  );
}