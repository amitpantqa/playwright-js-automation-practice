import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page1.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page1.locator('input[name="username"]').fill('admin');
  await page1.locator('input[name="password"]').fill('admin123');
  await page1.getByRole('button', { name: 'Log In' }).click();
  await page1.getByText('The username and password').dblclick();
  await page1.getByRole('heading', { name: 'Error!' }).dblclick();
});