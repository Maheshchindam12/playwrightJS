const LoginPage = require("./LoginPage");
const InventoryPage = require("./InventoryPage");
const CartPage = require("./CartPage");
const CheckoutPage = require("./CheckoutPage");

class Pages {
  constructor(page) {
    this.page = page;
    this.login = new LoginPage(page);
    this.inventory = new InventoryPage(page);
    this.cart = new CartPage(page);
    this.checkout = new CheckoutPage(page);
  }
}

module.exports = Pages;
