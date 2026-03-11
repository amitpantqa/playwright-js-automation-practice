const{test, expect}=require('@playwright/test')

test.only("Validate the Amazon title", async function({page}){

await page.goto("https://www.amazon.in/")

const HomeTitle= await page.title();

console.log("Title of the page is"+" "+HomeTitle);
await expect(page).toHaveTitle("amazon");


})