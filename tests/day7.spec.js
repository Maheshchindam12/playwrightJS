const { test, expect } = require("@playwright/test");
test("login test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator(".title")).toContainText("Products");
  const items = page.locator(".inventory_item");

  await expect(items).toHaveCount(6);

  const itemNames = page.locator(".inventory_item_name");

  const count = await itemNames.count();

  for (let i = 0; i < count; i++) {
    console.log(await itemNames.nth(i).textContent());
  }

  await page.click("#add-to-cart-sauce-labs-backpack");
  await expect(page.locator(".shopping_cart_badge")).toContainText("1");

  
});
