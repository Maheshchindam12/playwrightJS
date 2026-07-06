const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const InventoryPage =
require('../pages/InventoryPage');

test('add product test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const inventoryPage =
    new InventoryPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.addProduct();

    await expect(
        page.locator(
            inventoryPage.cartBadge
        )
    ).toContainText('1');

});