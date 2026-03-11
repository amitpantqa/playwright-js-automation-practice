const{test,expect}=require('@playwright/test')
test.use({viewport:{width:1536,height:730}})

test("Validate Login functionality", async function({page}){

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder('Username').fill('admin',{delay:100})
   await page.locator("//input[@name='password']").fill('admin123',{delay:100})
   await page.locator("//button[contains(text, Login )]").click();

    await expect(page).toHaveURL(/Dashboard/i)   // regex //i for case-insensitive

    //for Logout

    //await page.locator("//img[@class='oxd-userdropdown-img']").click();
    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();

    await expect(page).toHaveURL(/login/i)

    console.log(await page.viewportSize().width)
})