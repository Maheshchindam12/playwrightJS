const BasePage = require("./BasePage");
const { expect } = require("@playwright/test");

class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.productName = ".inventory_item_name";
  }

  async verifyProduct(productName) {
    await expect(this.page.locator(this.productName)).toContainText(
      productName,
    );
  }
}

module.exports = CartPage;
