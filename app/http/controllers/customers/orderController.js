const Order = require("../../../models/Order");
const moment = require("moment"); // this package is used for formating time

function orderController() {
  return {
    // data jo submit ho rha means order jo user submit kr rha h
    store(req, res) {
      //   console.log(req.body);
      // Validate Request
      const { phone, address } = req.body;
      if (!phone || !address) {
        req.flash("error", "All fields are required");
        return res.redirect("/cart");
      }

      // Making order and saving order in Database
      const order = new Order({
        customerId: req.user._id, // passportJS loggedIn user ko available kr deta h request k upar
        items: req.session.cart.items, // sessions se
        phone: phone,
        address: address,
      });
      order
        .save()
        .then((result) => {
          req.flash("success", "Order placed Successfully ");
          delete req.session.cart; // empty kr rhe h cart ko
          return res.redirect("/customer/orders");
        })
        .catch((err) => {
          req.flash("error", "Something went wrong!");
          return res.redirect("/cart");
        });
    },

    // route for showing his/her order to particular user
    async index(req, res) {
      const orders = await Order.find(
        // VO ORDER SEARCH KRO JISKI CUSTOMER ID KI VALUE REQ.USER KI ID K BRARABR H
        {
          customerId: req.user._id,
        },
        null,
        { sort: { createdAt: -1 } } // sorting as new will come first (descending order -1)
      );

      // Y ARRAY OF OBJECT H JO KI HMKO MIL RHA H AUR AB ISE HME FRONTEND P BHEJNA H
      // console.log(orders);
      res.render("customer/order", {
        orders: orders,
        moment: moment,
      });
      // console.log(orders);
    },
  };
}

module.exports = orderController;
