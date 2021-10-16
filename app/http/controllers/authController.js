const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

function authController() {
  const _getRedirectUrl = (req) => {
    return req.user.role === "admin" ? "/admin/orders" : "customer/orders";
  };

  return {
    // login k controller

    login(req, res) {
      res.render("auth/login");
    },

    // login k data submit hone wala controller
    postLogin(req, res, next) {
      const { email, password } = req.body;
      // validate request
      if (!email || !password) {
        req.flash("error", "All fields are required!");

        return res.redirect("/login");
      }
      // info k andr done k message milenge yhn p (err , user , info ) == done hi h jo passport ki strategy m h
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          req.flash("error", info.message);
          return next(err);
        }

        if (!user) {
          req.flash("error", info.message);
          return res.redirect("/login");
        }
        // login krne ke= method
        req.logIn(user, (err) => {
          if (err) {
            req.flash("error", info.message);
            return next(err);
          }
          return res.redirect(_getRedirectUrl(req));
        });
      })(req, res, next);
    },

    // REGISTER k controller
    register(req, res) {
      res.render("auth/register");
    },

    // register k data submit krne k controller

    async postRegister(req, res) {
      const { name, email, password } = req.body;
      // validate request if any field remains empty
      if (!name || !email || !password) {
        req.flash("error", "All fields are required!");
        req.flash("name", name);
        req.flash("email", email);

        return res.redirect("/register");
      }

      // check email exists or not
      User.exists({ email: email }, (err, result) => {
        if (result) {
          req.flash("error", "Email already registered!");
          req.flash("name", name);
          req.flash("email", email);
          return res.redirect("/register");
        }
      });

      // Now if ALL OKAY

      // If NEW EMAIL it means new USER
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // create a User in DataBase
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });

      user
        .save()
        .then((user) => {
          // Automatic login
          return res.redirect("/");
        })
        .catch((err) => {
          req.flash("error", "Something goes wrong!!");
          return res.redirect("/register");
        });
      // console.log(req.body);
    },

    // logout k controller

    logout(req, res) {
      req.logout();
      return res.redirect("/login");
    },
  };
}

module.exports = authController;
