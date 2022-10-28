import { Given } from "@cucumber/cucumber";
import { Then } from "@cucumber/cucumber";
import chai from "chai";
import reporter from "../../helper/reporter"
import ATSHomePage from "../../page-objects/ATS.home.page"
import AccountPage from "../../page-objects/ATS.Create.Account.page"

/** login to Automation Test Store */
Given(/^Register to Automation Test Store$/, async function () {

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

/** New Account registeration  */
Then(/^Create Account by enter all fields$/, async function (dataTable) {
    let dt = dataTable.hashes()
    
    try {
        reporter.addStep(this.testid, "info", "Account form fill for new registeration")
        // await AccountPage.CreateAccount(this.testid, dataTable)
        await AccountPage.enterfirstname(this.testid, dt[0].FirstName)
        await AccountPage.enterlastname(this.testid, dt[0].LastName)
        await AccountPage.enteremail(this.testid, dt[0].Email)
        await AccountPage.enteraddress1(this.testid, dt[0].Address1)
        await AccountPage.entercity(this.testid, dt[0].City)
        await AccountPage.selectcountry(this.testid, dt[0].Country)
        await AccountPage.selectregion(this.testid, dt[0].Region)
        await AccountPage.enterzipcode(this.testid, dt[0].ZipCode)
        await AccountPage.enterlogin(this.testid, dt[0].LoginName)
        await AccountPage.enterpassword(this.testid, dt[0].Password)
        await AccountPage.enterconfrim(this.testid, dt[0].Confrim)
        await AccountPage.clicknewsletterradioBtn(this.testid)
        await AccountPage.clickagreecheckbox(this.testid)
        await AccountPage.clickcontinuetbtn(this.testid)
        
        // await browser.debug()
    
    } catch (err) {
        err.message = `Failed to Create account, ${err.message}`
        throw err
    }
})

/** Validate user name on landing page */
Then(/^Validate on the landing screen with correct name$/, async function (dataTable) {
    let dt = dataTable.hashes()   
    
    try {
        reporter.addStep(this.testid, "info", "Correct First is displaced on Landing page")
        await browser.pause(1000)
        let eletext= await $('#customer_menu_top')
        let val = await eletext.getText()
        chai.expect(val).to.contain(dt[0].FirstName)
        
    } catch (err) {
        err.message = `Failed to Create account, ${err.message}`
        throw err
    }
})