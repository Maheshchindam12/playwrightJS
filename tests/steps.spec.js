const { test, expect } = require("@playwright/test");

test("Login Test", async ({ page }) => {
  await test.step("Open Login Page", async () => {
    await page.goto("https://www.saucedemo.com");
  });

  await test.step("Enter Username", async () => {
    await page.fill("#user-name", "standard_user");
  });

  await test.step("Enter Password", async () => {
    await page.fill("#password", "secret_sauce");
  });

  await test.step("Click Login", async () => {
    await page.click("#login-button");ss
  });

  await test.step("Verify Dashboard", async () => {
    await expect(page).toHaveURL(/inventory/);
  });
  await test.step("Capture screenshot", async () => {
    const screenshot = await page.screenshot();

    await test.info().attach("Login Screen", {
      body: screenshot,
      contentType: "image/png",
    });
  });

  await test.info().attach("Test Log", {
    body: "User logged in successfully",
    contentType: "text/plain",
  });

  const data = {
    user: "standard_user",
    env: "QA",
    status: "login test",
  };

  await test.info().attach("Test Data", {
    body: JSON.stringify(data, null, 2),
    contentType: "application/json",
  });
});
