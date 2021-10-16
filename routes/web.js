// CONTROLLERS

const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const adminOrderController = require("../app/http/controllers/admin/orderController");

// MIDDLEWARE

// GUEST Middleware is for checking that if user is logged in and then also he tries to click on login  or register route  then instead of showing him login and register page render him a home page
const guest = require("./../app/http/middleware/guest");

// AUTH Middleware is for checking whether a user is logged in or not if logged in then render what user wants otherwise redirect to login page
const auth = require("./../app/http/middleware/auth");

// y function h jisme app get kr rhe  h hm server.js se
function initRoutes(app) {
  // GENERAL ROUTES

  /*
  @type       -     GET
  @route      -     /
  @desc       -     route for HOME PAGE  of user
  @access     -     PUBLIC
  */
  app.get("/", homeController().index);

  /*
  @type       -     GET
  @route      -     /login
  @desc       -     route for LOGIN PAGE  of user
  @access     -     PUBLIC
  @middleware -     guest
  */
  app.get("/login", guest, authController().login);

  /*
  @type       -     POST
  @route      -     /login
  @desc       -     route for LOGIN PAGE  of user
  @access     -     PUBLIC
  */
  app.post("/login", authController().postLogin);

  /*
  @type       -     GET
  @route      -     /register
  @desc       -     route for REGISTER PAGE  of user
  @access     -     PUBLIC
  @middleware -     guest
  */

  app.get("/register", guest, authController().register);

  /*
  @type       -     POST
  @route      -     /register
  @desc       -     route for REGISTER PAGE  of user
  @access     -     PUBLIC
  */
  app.post("/register", authController().postRegister);

  /*
  @type       -     POST
  @route      -     /logout
  @desc       -     route for redirecting after logout
  @access     -     PROTECTED(after login)
  */

  app.post("/logout", authController().logout);

  /*
  @type       -     GET
  @route      -     /cart
  @desc       -     route for CART PAGE  of user
  @access     -     PUBLIC
  */

  app.get("/cart", cartController().index);

  /*
  @type       -     POST
  @route      -     /update-cart
  @desc       -     route for posting and seeing order PAGE  of user
  @access     -     PUBLIC
  */
  app.post("/update-cart", cartController().update);

  //CUSTOMER ROUTES

  /*
  @type       -     POST
  @route      -     /orders
  @desc       -     route for ordering product
  @access     -     PRIVATE (for each user)
  @middleware -     auth
  */

  app.post("/orders", auth, orderController().store);

  /*
  @type       -     GET
  @route      -     /customer/orders
  @desc       -     route for showing ordering details for each user
  @access     -     PRIVATE (for each user)
  @middleware -     auth
  */

  app.get("/customer/orders", auth, orderController().index);

  //ADMIN ROUTES

  /*
  @type       -     GET
  @route      -     /customer/orders
  @desc       -     route for showing ordering details for each user
  @access     -     PRIVATE (for each user)
  @middleware -     auth
  */
  app.get("/admin/orders", auth, adminOrderController().index);
}

// init routes ko export kr diye h taki is file ko koi bhi  reuore kre toh init function usko mil jaye
module.exports = initRoutes;
