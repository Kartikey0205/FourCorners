const Order = require("../../../models/Order");

function orderController() {
  return {
    index(req, res) {
      Order.find({ status: { $ne: "completed" } }, null, {
        sort: { createdAt: -1 },
      })
        .populate("customerId", "-password")
        .exec((err, orders) => {
          // Ajax call using axios nut not direct call so sending data in json form
          if (req.xhr) {
            return res.json(orders);
          } else {
            return res.render("admin/orders");
          }
        });
    },
  };
}
module.exports = orderController;
