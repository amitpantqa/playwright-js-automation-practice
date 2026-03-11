import {test,expect} from '@playwright/test'

test("HOverover", async({page})=>{
await page.goto("https://qaplayground.dev/apps/mouse-hover/")

await page.locator(".poster").hover()


await page.waitForTimeout(3000)
})