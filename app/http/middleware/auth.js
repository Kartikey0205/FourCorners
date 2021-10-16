//  LOOGGED IN USER PROTECTED MIDDLEWARE

function auth(req, res, next) {
  if (!req.isAuthenticated()) {
    // due to pasport we get req.isAuth..
    return res.redirect("/login");
  }
  return next();
}

module.exports = auth;
