// Import model of Menu

const Menu = require("../../models/Menu");

function homeController() {
  return {
    //  home page rendering method
    index(req, res) {
      Menu.find()
        .then((products) => {
          // console.log(products);
          return res.render("home", {
            products: products,
          });
        })
        .catch(() => console.log("Error in finding"));
    },
  };
}

module.exports = homeController;
