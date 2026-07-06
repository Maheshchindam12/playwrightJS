const { test, expect } = require("@playwright/test");

test.describe("Sauce Demo Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill("#user-name", "standard_user");

    await page.fill("#password", "secret_sauce");

    await page.click("#login-button");
  });

  test("verify products page", async ({ page }) => {
    await expect(page.locator(".title")).toContainText("Products");
  });

  test('take screenshot', async ({ page }) => {

    await page.screenshot({
        path: 'homepage.png'
    });

});

  test("add product to cart", async ({ page }) => {
    await page.click("#add-to-cart-sauce-labs-backpack");

    await expect(page.locator(".shopping_cart_badge")).toContainText("1");
    await page.screenshot({
      path: "screenshot.png",
    });
  });
});
