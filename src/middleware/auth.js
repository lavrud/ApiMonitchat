// const jwt = require('jsonwebtoken')

// module.exports = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ message: 'Authorization header is required' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your_secret_key');
//     req.user = decoded.user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };