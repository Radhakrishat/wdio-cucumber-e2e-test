import { Given } from "@cucumber/cucumber";
import chai from "chai";
/** login to inventory page */
Given(/^Login to inventory web app$/, async function(){
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    //await browser.maximizeWindow()
    
    /** Login to Inventory */
    await $('#user-name').setValue("standard_user")
    await $('#password').setValue("secret_sauce")
    await $('#login-button').click()
    
    
    
})