import{test, expect} from '@playwright/test'

test('HandleMultiDropdown', async({page})=>{

await page.goto("https://www.testkru.com/")

await page.getByText("Dropdowns").click()

// now selecting the dropdown

await page.locator("//select[@id='singleSelect']").selectOption("JavaScript") //by visible text
await page.locator("//select[@id='singleSelect']").selectOption({value:'java'}) //by value
await page.locator("//select[@id='singleSelect']").selectOption({label:'Ruby'}) // by label


})


