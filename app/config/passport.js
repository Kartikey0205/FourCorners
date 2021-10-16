const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

function init(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async (email, password, done) => {
        // login
        // check if email exists or not
        const user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: "No user found!" });
        }
        if (user) {
          // password match
          bcrypt
            .compare(password, user.password)
            .then((match) => {
              if (match) {
                // user bhejrhe  h yhn se sucessfully
                return done(null, user, { message: "Logged in Successfully!" });
              }
              return done(null, false, { message: "Invalid Credentials!" });
            })
            .catch((err) => {
              return done(null, false, { message: "Something goes wrong!" });
            });
        }
      }
    )
  );
  //   session k andr hmko login hone k bdd hmko kch toh store krna hota h toh hm yhn p user ki id store krenge
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  //   session k andr jo store h use get kr rhe h
  passport.deserializeUser((id, done) => {
    // currently logged in id
    User.findById(id, (err, user) => {
      done(err, user);
    });
    // req.user milta h hme jo hm application m use kr skte h
  });
}

module.exports = init;
