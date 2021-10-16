function cartController() {
  return {
    //  cart show krne k controller

    index(req, res) {
      res.render("customer/cart");
    },

    //  cart m kch bhi krna h toh like adding to cart , deleting to cart krne k controller

    update(req, res) {
      // checking for first time creating cart and adding basic structure
      // req.session krne se hmko current or say particular user k session mil jayega

      // 1st request p y hoga
      if (!req.session.cart) {
        req.session.cart = {
          items: {},
          totalQty: 0,
          totalPrice: 0,
        };
      }

      // After 1st request we are trying to get the cart from request first
      let cart = req.session.cart;
      // console.log(req.body);

      // cart.items[key jo banana cahte h]
      if (!cart.items[req.body._id]) {
        cart.items[req.body._id] = {
          item: req.body,
          qty: 1,
        };
        cart.totalQty = cart.totalQty + 1;
        cart.totalPrice = cart.totalPrice + req.body.price;
      }
      // if cart exist then we want to update the cart
      else {
        cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
        cart.totalQty = cart.totalQty + 1;
        cart.totalPrice = cart.totalPrice + req.body.price;
      }

      return res.json({
        totalQty: req.session.cart.totalQty,
      });
    },
  };
}

module.exports = cartController;
