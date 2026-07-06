const { test, expect } = require('@playwright/test');

const Logger = require('../utils/logger');

test('@loginloggers Login Test', async ({ page }) => {

    Logger.info("Opening application");

    await page.goto('https://www.saucedemo.com');

    Logger.info("Entering username");

    await page.fill('#user-name', 'standard_user');

    Logger.info("Entering password");

    await page.fill('#password', 'secret_sauce');

});