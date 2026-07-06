const { test, expect } = require('@playwright/test');
const config = require('../config/config');
const LoginPage = require('../pages/LoginPage');

test('@config Login Test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.open(config.url);

    await login.login(config.username, config.password);

    await expect(page).toHaveURL(/inventory/);  

});