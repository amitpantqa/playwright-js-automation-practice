import{test, expect} from '@playwright/test'
import { log } from 'node:console';

test("NegativeLoginTestCases", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByRole('textbox', {name:/username/i}).fill("aadmin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole('button', {type:'submit'}).click();

const error_message=await page.getByText("Invalid credentials").textContent();
 expect(error_message).toBeTruthy()
})

test("PostiveLogintestcase", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


await page.getByRole('textbox', {name:/username/i}).fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole('button', {type:'submit'}).click();

const successlogin=await page.getByText("Dashboard").first().textContent()

expect(successlogin.includes("Dashboard")).toBeTruthy()

console,log("User is succesfully logged in")

expect(page).toHaveURL(/dashboard/i)

})