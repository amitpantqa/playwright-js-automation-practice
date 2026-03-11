import {test,expect} from '@playwright/test'

test("Buttons", async ({page})=> {


await page.goto("https://practicesoftwaretesting.com/")

// first we are making sure that our URL, Title and brand logo is there or not
await expect.soft(page).toHaveTitle(/Practice Software Testing - Toolshop/)
await expect.soft(page).toHaveURL(/practicesoftwaretesting/)
// for Homepage logo
await expect.soft(page.getByTitle("Practice Software Testing - Toolshop")).toBeVisible()

//before writing into the search box we are making sure that its enabled and empty

const searchbox= await page.locator("//input[@id='search-query']")

await expect(searchbox).toBeEmpty()
await expect(searchbox).toBeVisible()
await expect(searchbox).toBeEditable()
await expect(searchbox).toBeEnabled()

await searchbox.fill("hammers")
await searchbox.click()
})