const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");
const ScreenshotUtil = require("../utils/ScreenshotUtil");
const InventoryPage = require("../pages/InventoryPage");

const env = require("../config/env");

test("Framework Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(env.baseUrl);

  await loginPage.login(env.username, env.password);
  await ScreenshotUtil.capture(page, "homepage");
  await expect(page).toHaveURL(/inventory/);

  const inventoryPage = new InventoryPage(page);

  //   await inventoryPage.addBackpack();

  //   const count = await inventoryPage.getCartCount();

  //   console.log(count);

  //   expect(count).toBe(1);

  await inventoryPage.addBikeLight();
  await inventoryPage.openCart();
  const count = await inventoryPage.getCartCount();

  console.log(count);

  const products = await inventoryPage.getAllProductNames();

  console.log(products);
  await inventoryPage.addProduct("Sauce Labs Bike Light");

  
});
