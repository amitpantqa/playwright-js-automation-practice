import{test,expect} from '@playwright/test'

test("validate Login",async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

await page.locator("//a[@id='login2']").click();
await page.locator("//input[@id='loginusername']").fill("amitpant")
await page.locator("#loginpassword").fill("Qwerty@123");

await page.getByRole('button',{name:'Log in'}).click();

const loginverfying=await page.getByText('Welcome amitpant')

await expect(loginverfying).toBeVisible();

})