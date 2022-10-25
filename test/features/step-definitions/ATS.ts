import { Given } from "@cucumber/cucumber";
import chai from "chai";
import reporter from "../../helper/reporter"
import ATSHomePage from "../../page-objects/ATS.home.page"

/** login to inventory page */
Given(/^Register to Automation Test Store$/, async function(){
    
    try {
        reporter.addStep(this.testid, "info", "New account register to Automation Test Store")
        //@ts-ignore
        await ATSHomePage.navigateTo(browser.config.ATSURL)
        await ATSHomePage.clickLoginorregisterBtn(this.testid)
        await ATSHomePage.clickContinueBtn(this.testid)
    } catch (err) {
        err.message = `Failed at login step, ${err.message}`
        throw err
        
    }
  
    
})