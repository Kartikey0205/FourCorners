const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId, // taking users id from User model
      ref: "User",
      required: true,
    },
    items: {
      type: Object, // all items which is ordered
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    paymentType: {
      type: String,
      default: "COD",
    },

    status: {
      type: String,
      default: "Order_Placed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
