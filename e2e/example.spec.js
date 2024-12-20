const { test, expect } = require('@playwright/test');

test('AppHasAddButton', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const addButton = await page.locator('button:has-text("add")');
  await expect(addButton).toBeVisible();
});


test('AppCanSubtract', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#number1', '7');
  await page.fill('#number2', '3');

  await page.click('button:has-text("subtract")');

  const result = await page.locator('#result');
  await expect(result).toHaveText(/\b4\b/);
});
