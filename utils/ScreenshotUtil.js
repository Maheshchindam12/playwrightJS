class ScreenshotUtil {
  static async capture(page, name) {
    await page.screenshot({
      path: `screenshots/${name}.png`,
    });
  }
}

module.exports = ScreenshotUtil;
