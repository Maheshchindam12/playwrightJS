const BasePage = require("./BasePage");

const { expect } = require("@playwright/test");
class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutBtn = "#checkout";
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueBtn = "#continue";
    this.finishBtn = "#finish";
    this.successMsg = ".complete-header";
  }

  async clickCheckout() {
    await this.click(this.checkoutBtn);
  }

  async enterCustomerDetails(firstName, lastName, postalCode) {
    await this.fill(this.firstName, firstName);
    await this.fill(this.lastName, lastName);
    await this.fill(this.postalCode, postalCode);
  }

  async clickContinue() {
    await this.click(this.continueBtn);
  }

  async clickFinish() {
    await this.click(this.finishBtn);
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator(this.successMsg)).toContainText(
      "Thank you for your order!",
    );
  }
}
module.exports = CheckoutPage;