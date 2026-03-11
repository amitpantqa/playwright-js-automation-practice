import {test, expect} from '@playwright/test'

test ("Assertions", async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/register.htm")

await expect(await page.getByAltText("ParaBank")).toBeVisible()

await expect.soft(page).toHaveTitle(/ParaBank/)         // "Parabank"-its for exact match and /Parabank/ for pattern match
await expect(page).toHaveURL(/register/)

await page.locator("input[id='customer.firstName']").fill("Amit Pant")

})