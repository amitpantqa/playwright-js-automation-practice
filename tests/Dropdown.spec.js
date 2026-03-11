    import {test, expect} from "@playwright/test"
import { hasUncaughtExceptionCaptureCallback } from "node:process"

    test('Handledropdown', async({page})=>{

    await page.goto("https://practicesoftwaretesting.com/")
    //assertion validate we are on right page by verifying the page title and Url pattern

   await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/i)
  await  expect(page).toHaveURL("https://practicesoftwaretesting.com/")


    const category=await page.getByRole('button', {name:'Categories'})
    await category.click()

    // Handle dropdown
    const option1=await page.getByText('Hand Tools')
    await expect(option1).toBeVisible()

    const option2=await page.getByText('Power Tools')
   await  expect(option2).toBeVisible()
  //  await option2.click()

    const option3=await page.getByRole('link', {name:'Other'})
   await expect.soft(option3).toBeVisible()

    const option4=await page.getByText('Special Tools')
   await expect(option4).toBeVisible()
    
    const option5= page.getByRole('link',{name:'Rentals'})
    await expect(option5).toBeVisible()
    await option5.click()

    // check the number of option on dropdown

        await expect(page.locator("[routerlink^='/category/'] , a[routerlink='/rentals']")).toHaveCount(5)

    // print total number of optiions present
    
    const Alloptions=await page.$$("[routerlink^='/category/'] , a[routerlink='/rentals']")

        console.log("Number of options", Alloptions.length)
        await expect(Alloptions.length).toBe(5)        


    const aao=[page.locator("[routerlink^='/category/'] , a[routerlink='/rentals']")]

    for(const copyaao of aao){

          const text=await copyaao.allTextContents()

            console.log(text)

    }


    })