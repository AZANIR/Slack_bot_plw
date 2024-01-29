// @ts-check
const { test, expect } = require('@playwright/test');
import { sendSlackMessage } from '../utils/send-slack.js';


test.afterAll(async () => {
  console.log('afterAll');
  let testId = Math.floor(1000 + Math.random() * 9000);
  await sendSlackMessage(17, 2, 1234, testId)
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

