const{test, expect}=require('@playwright/test')

test.only('Verify the title of the website', async function({page}){

   await page.goto("https://www.google.com/")

    const URL=page.url()

    console.log("Url of the website is"+ " "+URL)

    const titlepage=await page.title()

    console.log("Title of the page is"+" "+titlepage)

   // await expect(titlepage).toBe("joogle")
    await expect(page).toHaveTitle("Google")

})