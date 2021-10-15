import axios from "axios"; // calling from node modules folder
import Noty from "noty"; // calling Noty from Node mosules folder Noty

let addToCart = document.querySelectorAll(".add-to-cart");
let cartCounter = document.getElementById("cartCounter");

// cart mein update krne wala product aur session mein cart ko store krne k liye yhn p hm axios libraray use krenge
const updateCart = (product) => {
  // ajax call

  // hme data bhejna h toh post request
  axios
    .post("/update-cart", product)
    .then((res) => {
      console.log("Response is ", res);
      cartCounter.innerText = res.data.totalQty;

      // message show kr rhe h
      new Noty({
        type: "success",
        timeout: 1200, //after this milisecond it hide
        text: "Item Added to Cart!",
        progressBar: false,
        // layout: "bottomRight",
      }).show();
    })
    .catch((err) => {
      // console.log("Error in axios fetch")
      new Noty({
        type: "error",
        timeout: 1500,
        text: "Something goes Wrong!",
        progressBar: false,
        // layout: "bottomRight",
      }).show();
    });
};

//  Adding button p menu k event listener lga rhe h kuki hmne query All ki that means ki array of object mil jayega hme so use loop through kr skte h
addToCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e);
    // button p data attribute k zariye hm log current product ko string m change krke yhn p bhej rhe h aur yhn p wps string ko parse krenge object mein
    let product = JSON.parse(btn.dataset.product);
    // server p request bhejen k function h update cart or apne cart ko store krwayenge session mein
    updateCart(product);
    // console.log(product);
  });
});

// Remove Order alert message after 2 seconds
const alertMsg = document.querySelector("#success-alert");
if (alertMsg) {
  setTimeout(() => {
    alertMsg.remove();
  }, 2000);
}

// Slidehow js
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Products Navbar
(() => {
  const productContainer = document.querySelector(".product-filter");
  const productItems = document.querySelectorAll(".product-item");
  productContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      // DEACTIVATE EXISTING ACTIVE 'filter-item'
      productContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");

      // ACTIVATING NEW FILTER ITEM
      event.target.classList.add("active", "outer-shadow");

      // Getting attribute here after clicking
      const target = event.target.getAttribute("data-target");
      // console.log(target);
      productItems.forEach((item) => {
        // console.log(item);
        // console.log(item.getAttribute("data-category"));
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });
})();

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");
var modal13 = document.getElementById("myModal13");

// Get the button that opens the modal
var btn1 = document.getElementById("myModalBtn1");
var btn2 = document.getElementById("myModalBtn2");
var btn3 = document.getElementById("myModalBtn3");
var btn4 = document.getElementById("myModalBtn4");
var btn5 = document.getElementById("myModalBtn5");
var btn6 = document.getElementById("myModalBtn6");
var btn7 = document.getElementById("myModalBtn7");
var btn8 = document.getElementById("myModalBtn8");
var btn9 = document.getElementById("myModalBtn9");
var btn10 = document.getElementById("myModalBtn10");
var btn11 = document.getElementById("myModalBtn11");
var btn12 = document.getElementById("myModalBtn12");
var btn13 = document.getElementById("myModalBtn13");

// Get the <span> element that closes the modal
var cls1 = document.querySelector("#close-1");
// console.log(cls1);
var cls2 = document.querySelector("#close-2");
var cls3 = document.querySelector("#close-3");
var cls4 = document.querySelector("#close-4");
var cls5 = document.querySelector("#close-5");
var cls6 = document.querySelector("#close-6");
var cls7 = document.querySelector("#close-7");
var cls8 = document.querySelector("#close-8");
var cls9 = document.querySelector("#close-9");
var cls10 = document.querySelector("#close-10");
var cls11 = document.querySelector("#close-11");
var cls12 = document.querySelector("#close-12");
var cls13 = document.querySelector("#close-13");

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};
btn4.onclick = function () {
  modal4.style.display = "block";
};
btn5.onclick = function () {
  modal5.style.display = "block";
};
btn6.onclick = function () {
  modal6.style.display = "block";
};
btn7.onclick = function () {
  modal7.style.display = "block";
};
btn8.onclick = function () {
  modal8.style.display = "block";
};
btn9.onclick = function () {
  modal9.style.display = "block";
};
btn10.onclick = function () {
  modal10.style.display = "block";
};
btn11.onclick = function () {
  modal11.style.display = "block";
};
btn12.onclick = function () {
  modal12.style.display = "block";
};
btn13.onclick = function () {
  modal13.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
cls1.addEventListener("click", () => {
  modal1.style.display = "none";
});
cls2.addEventListener("click", () => {
  modal2.style.display = "none";
});
cls3.addEventListener("click", () => {
  modal3.style.display = "none";
});
cls4.addEventListener("click", () => {
  modal4.style.display = "none";
});
cls5.addEventListener("click", () => {
  modal5.style.display = "none";
});
cls6.addEventListener("click", () => {
  modal6.style.display = "none";
});
cls7.addEventListener("click", () => {
  modal7.style.display = "none";
});
cls8.addEventListener("click", () => {
  modal8.style.display = "none";
});
cls9.addEventListener("click", () => {
  modal9.style.display = "none";
});
cls10.addEventListener("click", () => {
  modal10.style.display = "none";
});
cls11.addEventListener("click", () => {
  modal11.style.display = "none";
});

cls12.addEventListener("click", () => {
  modal12.style.display = "none";
});
cls13.addEventListener("click", () => {
  modal13.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  } else if (event.target == modal5) {
    modal5.style.display = "none";
  } else if (event.target == modal6) {
    modal6.style.display = "none";
  } else if (event.target == modal7) {
    modal7.style.display = "none";
  } else if (event.target == modal8) {
    modal8.style.display = "none";
  } else if (event.target == modal9) {
    modal9.style.display = "none";
  } else if (event.target == modal10) {
    modal10.style.display = "none";
  } else if (event.target == modal11) {
    modal11.style.display = "none";
  } else if (event.target == modal12) {
    modal12.style.display = "none";
  } else if (event.target == modal13) {
    modal13.style.display = "none";
  }
};

console.log("hello");
