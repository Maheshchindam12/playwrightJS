class ReportManager {
  static async log(testInfo, message) {
    console.log(`[INFO] ${message}`);

    await testInfo.attach("Execution Log", {
      body: message,
      contentType: "text/plain",
    });
  }

  static async attachScreenshot(page, testInfo, name) {
    await testInfo.attach(name, {
      body: await page.screenshot({
        fullPage: true,
      }),
      contentType: "image/png",
    });
  }
}

module.exports = ReportManager;
