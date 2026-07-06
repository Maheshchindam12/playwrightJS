const BasePage = require("./BasePage");

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.cartIcon = ".shopping_cart_link";
    this.cartBadge = ".shopping_cart_badge";
    this.productNames = ".inventory_item_name";

    this.firstAddToCartBtn = 'button[data-test^="add-to-cart"]';
  }

  async addBackpack() {
    await this.click("#add-to-cart-sauce-labs-backpack");
  }

  async addBikeLight() {
    await this.click("#add-to-cart-sauce-labs-bike-light");
  }

  async openCart() {
    await this.click(this.cartIcon);
  }

  async getCartCount() {
    const count = await this.page.locator(this.cartBadge).textContent();

    return Number(count);
  }

  async getAllProductNames() {
    const products = this.page.locator(this.productNames);

    const count = await products.count();

    let names = [];

    for (let i = 0; i < count; i++) {
      names.push(await products.nth(i).textContent());
    }

    return names;
  }

  async addProduct(productName) {
    const button = `#add-to-cart-${productName
      .toLowerCase()
      .replaceAll(" ", "-")}`;

    await this.click(button);
  }

  async addFirstProduct() {
    const productName = await this.page
      .locator(this.productNames)
      .first()
      .textContent();

    await this.page.locator(this.firstAddToCartBtn).first().click();

    return productName;
  }
}

module.exports = InventoryPage;
