// // authentication.js
// const jsonwebtoken = require('jsonwebtoken');
// const { tokenValidated, PRIVATE_KEY } = require('../middleware/auth');

// const user = {
//   name: 'ApiMonichatSCMV',
//   email: 'durval.junior@santacasavitoria.org',
//   password: PRIVATE_KEY
// };

// const authentication = async (req, res) => {
//   const [, hash] = req.headers.authorization?.split(' ') || [' ', ' '];
//   const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

//   try {
//     const correctPassword = email === user.email && password === user.password;

//     if (!correctPassword) return res.status(401).send('Password or E-mail incorrect!');

//     const token = jsonwebtoken.sign(
//       { user: JSON.stringify(user) },
//       PRIVATE_KEY,
//       { expiresIn: '60m' }
//     );

//     return res.status(200).json({ data: { user, token } });
//   } catch (error) {
//     console.log(error);
//     return res.send(error);
//   }
// };

// module.exports = { authentication };
