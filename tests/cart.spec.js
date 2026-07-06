const { test } = require("@playwright/test");

const config = require("../config/config");
const PageHandler = require("../pages/Pages");
const ReportManager = require("../utils/ReportManager");
const { generateName, generatePinCode } = require("../utils/dataGenerator");
const logStep = async (testInfo, message) => ReportManager.log(testInfo, message);


test("@cart Verify Product Added To Cart", async ({ page }, testInfo) => {
  const pages = new PageHandler(page);

  await loginFlow(pages, config, page, testInfo);
  const productName = await addProductFlow(pages, page, testInfo);
  await checkoutFlow(pages, page, testInfo);
});

async function loginFlow(pages, config, page, testInfo) {
  await pages.login.open(config.url);
  await pages.login.login(config.username, config.password);

  await logStep(testInfo, "Login successful");
}

async function addProductFlow(pages, page, testInfo) {
  const productName = await pages.inventory.addFirstProduct();

  await logStep(testInfo, "Selected Product: " + productName);
  await ReportManager.attachScreenshot(page, testInfo, "Product_Selected");

  await pages.inventory.openCart();
  await pages.cart.verifyProduct(productName);

  await logStep(testInfo, "Product verified in cart");

  return productName;
}

async function checkoutFlow(pages, page, testInfo) {
  await pages.checkout.clickCheckout();

  await logStep(testInfo, "Checkout started");

  const firstName = generateName();
  const lastName = generateName();
  const pinCode = generatePinCode();

  await pages.checkout.enterCustomerDetails(firstName, lastName, pinCode);

  await ReportManager.attachScreenshot(page, testInfo, "Customer_Details");

  await pages.checkout.clickContinue();

  await logStep(testInfo, "Order overview displayed");

  await pages.checkout.clickFinish();
  await pages.checkout.verifyOrderSuccess();

  await ReportManager.attachScreenshot(page, testInfo, "Order_Success");

  await logStep(testInfo, "Order placed successfully");
}