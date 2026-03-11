import {test,expect} from '@playwright/test';

test.only('HandleSelectdropdown',async({page})=>{

   await  page.goto("https://www.amazon.in/")
    await page.locator("#searchDropdownBox").selectOption({label:'Alexa Skills'}); // by label
   await page.screenshot({path:"tests/Screenshots/"+Date.now()+"first.png",fullPage:true})
})
test('HandleSelectdropdown1',async({page})=>{

   await  page.goto("https://www.amazon.in/")
 await page.locator('#searchDropdownBox').selectOption('Appliances');  // by visible text
})
test('HandleSelectdropdown2',async({page})=>{

   await  page.goto("https://www.amazon.in/")
   await page.locator('#searchDropdownBox').selectOption({value:'search-alias=audible'}) // by value
})
test('HandleSelectdropdown3',async({page})=>{

   await  page.goto("https://www.amazon.in/")
   await page.locator('#searchDropdownBox').selectOption({index:5})  // by index
})
test("Assertiondropdown", async({page})=>{

    await  page.goto("https://www.amazon.in/")

    //validate the count
    await expect.soft(await page.locator("select[id='searchDropdownBox'] , option[value^='search-alias=']")).toHaveCount(46)

    //print all values

    const tcount=await page.locator('#searchDropdownBox').textContent()
    await expect(tcount.includes('Software')).toBeTruthy()
    console.log("the length of the option is",tcount.length)


    //print all values

    const arrselect= await page.$$('#searchDropdownBox')

    for (const temparrayforprint of arrselect){

        const text=await temparrayforprint.textContent()
        console.log(text)
    }
})