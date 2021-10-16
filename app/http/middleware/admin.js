// it check whether admin is logged in or not

function admin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  return res.redirect("/");
}

module.exports = admin;
