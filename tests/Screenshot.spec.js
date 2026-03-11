import {test,expect} from '@playwright/test'

test.use({viewport:{width:1536,height:730}})

test("Screenshots",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.screenshot({path:'tests/Screenshots/'+Date.now()+"homepage.png"})

})

test("Full Page Screenshot",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/register.htm")
await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Fullview.png',fullPage:true})

})

test("Screesshow Element",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")
await page.locator("//ul[@class='navbar-nav ml-auto']").screenshot({path:"tests/Screenshots/"+Date.now()+"Navbar.png"})

})

