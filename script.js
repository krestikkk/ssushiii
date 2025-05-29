let cards = document.querySelectorAll(".menu-item")
let btn_bye = document.querySelectorAll(".btn-bye")
let cart_counter = document.getElementById("cartCount")

document.addEventListener("DOMContentLoaded", () => {
  cart_counter.innerHTML = localStorage.getItem("count") || 0;

  let counter = +localStorage.getItem("count") || 0;

  window.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-cart")) {
      counter++;
      localStorage.setItem("count", counter);
      cart_counter.innerHTML = counter;

      let card = event.target.closest(".menu-item")
        

      let product_info = {
          title: card.querySelector("h3").innerText,
          imgSrc: card.querySelector("img").getAttribute("src"),
          desc: card.querySelector('p').innerText,
          price: +card.querySelector('b').innerText,
          id: card.querySelector('.id').innerText
      }
      console.log(product_info.price)

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product_info);
      localStorage.setItem("cart", JSON.stringify(cart));   
     }
  });
});