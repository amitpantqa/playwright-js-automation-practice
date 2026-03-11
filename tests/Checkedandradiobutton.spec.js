import {test, expect} from '@playwright/test'

test("Checkedbutton", async({page})=>{

await page.goto("https://practicesoftwaretesting.com/")

//trying to check the single box
await page.getByRole('checkbox', {name: 'Hammer'}).check();

//for Screwdriver
const screwcheckboc=await page.getByText("Screwdriver")
await screwcheckboc.check();
await expect(screwcheckboc).toBeChecked();

//for Chisel
await page.getByText("Chisels").check();
expect(await page.getByText("Chisels").isChecked()).toBeTruthy();

//for selecting multiple checkboxes

const multicheckboxes=[page.getByRole('checkbox', {name: 'Grinder'}), page.getByRole('checkbox', {name:'Saw'}).nth(1), 
                    page.getByRole('checkbox', {name: 'Drill'})

                            ]

for(const locators of multicheckboxes){

    await locators.check();
    await expect(locators).toBeChecked()
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+ "CheckedElement.png",fullPage:true})

}

for(const unlocator of multicheckboxes){

    await unlocator.uncheck();
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+"Unchecked.png",fullPage:true})
}
await page.waitForTimeout(5000);


})