const { test, expect } = require("@playwright/test");

test("open google", async ({ page }) => {
  await page.goto("https://google.com");
  await page.fill('textarea[name="q"]', "Playwright");
  await page.click('input[name="btnK"]');
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/search/);
});
