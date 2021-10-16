// it check whether user is logged in or not

function guest(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = guest;
