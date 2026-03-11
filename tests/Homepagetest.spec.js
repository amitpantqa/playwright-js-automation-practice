const{test, expect}=require("@playwright/test")

test("My first Test", async function({page}){

await expect(12).toBe(1)

})

test("My second test", async function({page}){

  await  expect("Amit").toBe("amit")
})

test("My 3rd test", async function({page}){
   await expect(100).toBe(100)


})