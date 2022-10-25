import { Given } from "@cucumber/cucumber";
import chai from "chai";
import logger from "../../helper/logger"
import reporter from "../../helper/reporter"

/** login to inventory page */
Given(/^Login to inventory web app$/, async function(){
    reporter.addStep(this.testid, "info", "Login to sauce demo")
    // logger.info('Started to login sauce demo app')
    //get the testid
    console.log('>> Test ID: ', this.testid);
    // console.log('Test Username:', process.env.TEST_USERNAME);
    //@ts-ignore
   // await browser.url("https://www.saucedemo.com/")
   await browser.url(browser.config.sauceDemoURL)
   console.log('>> Test config values:', browser.config);
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    //await browser.maximizeWindow()
    
    /** Login to Inventory */
    await $('#user-name').setValue(process.env.TEST_STD_USERNAME)
    await $('#password').setValue(process.env.TEST_STD_PASSWORD)
    await $('#login-button').click()
    
    this.appid = "ABCD"
    reporter.addStep(this.testid, "debug", "login is successful....")
    
})