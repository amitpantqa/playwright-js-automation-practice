import{test, expect} from '@playwright/test'

test('Multidrop', async({page})=>{

    await page.goto("https://www.testkru.com/")
    await page.getByText("Dropdowns").click()


    await page.locator("//select[@id='multiSelect']").selectOption(['playwright', 'selenium', 'testcafe'])

     const loc= await page.locator("//select[@id='multiSelect'] //option")
     const txt=await loc.allTextContents()
     console.log(txt)
     await expect(loc).toHaveCount(5)

        const arrloc= [page.locator("//select[@id='multiSelect'] //option")]

        for(const locat of arrloc){

            const tex=await locat.allTextContents()
            console.log(tex)
        }

    
})