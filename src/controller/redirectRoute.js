const redirectRoute = async (req, res) => {
  res.redirect(301, '/api');
};

module.exports = { redirectRoute };
