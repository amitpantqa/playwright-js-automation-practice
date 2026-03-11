import {test,expect} from '@playwright/test'
import { link } from 'node:fs'

test("product links", async ({page})=>{


await page.goto("https://www.demoblaze.com/index.html")
await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");


const prodlink= await page.$$("//div[@id='tbodyid']//div//h4//a")

for(const links of prodlink){

    const linktext=await links.textContent();

    console.log(linktext);

}

})