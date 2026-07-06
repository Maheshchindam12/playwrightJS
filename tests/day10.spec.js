const { test, expect } = require("@playwright/test");
const env = require("../config/env");
const users = require("../data/users.json");

for (const user of users) {
  test(`login test for ${user.username}`, async ({ page }) => {
    await page.goto(env.baseUrl);

    await page.fill("#user-name", user.username);

    await page.fill("#password", user.password);

    await page.click("#login-button");

    if (user.username === "locked_out_user") {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    } else {
      await expect(page).toHaveURL(/inventory/);
    }
  });
}
