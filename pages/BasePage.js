class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async type(locator, value) {
    await this.fill(locator, value);
  }

  async fill(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).textContent();
  }

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = BasePage;
