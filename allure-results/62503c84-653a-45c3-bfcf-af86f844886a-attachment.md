# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.js >> @cart Verify Product Added To Cart
- Location: tests\cart.spec.js:7:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1  | class BasePage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |   }
  5  | 
  6  |   async open(url) {
> 7  |     await this.page.goto(url);
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  8  |   }
  9  | 
  10 |   async click(locator) {
  11 |     await this.page.locator(locator).click();
  12 |   }
  13 | 
  14 |   async type(locator, value) {
  15 |     await this.fill(locator, value);
  16 |   }
  17 | 
  18 |   async fill(locator, value) {
  19 |     await this.page.locator(locator).fill(value);
  20 |   }
  21 | 
  22 |   async getText(locator) {
  23 |     return await this.page.locator(locator).textContent();
  24 |   }
  25 | 
  26 |   async getTitle() {
  27 |     return await this.page.title();
  28 |   }
  29 | }
  30 | 
  31 | module.exports = BasePage;
  32 | 
```