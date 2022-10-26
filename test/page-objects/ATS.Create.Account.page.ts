import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"

class AccountPage extends Page {
    constructor () {
        super()
    }

    /** Page object - Account form */

    get firstnameInputBox() { return $('#AccountFrm_firstname')}
    get lastnameInputBox() { return $('#AccountFrm_lastname')}
    get emailInputBox() { return $('#AccountFrm_email')}
    get address1InputBox() { return $('#AccountFrm_address_1')}
    get cityInputBox() { return $('#AccountFrm_city')}
    get countrySelect(){ return $('#AccountFrm_country_id')}
    get zoneselect() { return $('#AccountFrm_zone_id')}
    get postcodeInputBox() { return $('#AccountFrm_postcode')}
    get loginInputBox() { return $('#AccountFrm_loginname')}
    get passwordInputBox() { return $('#AccountFrm_password')}
    get confirmInputBox() { return $('#AccountFrm_confirm')}
    get newsletterRadioBtn() { return $('#AccountFrm_newsletter0')}
    get agreeCheckBox() { return $('#AccountFrm_agree')}
    get contiuneBtn() { return $('//*[@id="AccountFrm"]/div[5]/div/div/button')}
    
    get customermenutop() { return $('#customer_menu_top')}
    
    /** Page actions */
    async enterfirstname(testid: string, firstname: string){
        if(!firstname) throw Error(`Given First Name: ${firstname} is not valid `)
        try {
            firstname = firstname.trim()
            await this.typeInto(await this.firstnameInputBox, firstname)
            reporter.addStep(testid, "info", `First Name: ${firstname} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering FirstName: ${firstname}, ${err.message}`
            throw err
        }
    }

    async enterlastname(testid: string, lastname: string){
        if(!lastname) throw Error(`Given Last Name: ${lastname} is not valid `)
        try {
            lastname = lastname.trim()
            await this.typeInto(await this.lastnameInputBox, lastname)
            reporter.addStep(testid, "info", `Last Name: ${lastname} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Last Name: ${lastname}, ${err.message}`
            throw err
        }
    }

    async enteremail(testid: string, email: string){
        if(!email) throw Error(`Given Email: ${email} is not valid `)
        try {
            email = email.trim()
            await this.typeInto(await this.emailInputBox, email)
            reporter.addStep(testid, "info", `Email: ${email} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Email: ${email}, ${err.message}`
            throw err
        }
    }

    async enteraddress1(testid: string, address1: string){
        if(!address1) throw Error(`Given Address 1: ${address1} is not valid `)
        try {
            address1 = address1.trim()
            await this.typeInto(await this.address1InputBox, address1)
            reporter.addStep(testid, "info", `Address 1: ${address1} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Address 1: ${address1}, ${err.message}`
            throw err
        }
    }

    async entercity(testid: string, city: string){
        if(!city) throw Error(`Given City: ${city} is not valid `)
        try {
            city = city.trim()
            await this.typeInto(await this.cityInputBox, city)
            reporter.addStep(testid, "info", `City: ${city} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering City: ${city}, ${err.message}`
            throw err
        }
    }

    async selectcountry(testid: string, country: string){
        if(!country) throw Error(`Given Country: ${country} is not valid `)
        try {
            country = country.trim()
            // await this.typeInto(await this.countrySelect, country)
            await this.selectdropdown(await this.countrySelect, country )
            reporter.addStep(testid, "info", `Country: ${country} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Country: ${country}, ${err.message}`
            throw err
        }
    }

    async selectregion(testid: string, region: string){
        if(!region) throw Error(`Given Region: ${region} is not valid `)
        try {
            region = region.trim()
            // await this.typeInto(await this.zoneselect, region)
            await this.selectdropdown(await this.zoneselect, region )
            reporter.addStep(testid, "info", `Region: ${region} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Region: ${region}, ${err.message}`
            throw err
        }
    }
    
    async enterzipcode(testid: string, zipcode: string){
        if(!zipcode) throw Error(`Given Zip code: ${zipcode} is not valid `)
        try {
            zipcode = zipcode.trim()
            await this.typeInto(await this.postcodeInputBox, zipcode)
            reporter.addStep(testid, "info", `Zip code: ${zipcode} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Zip code: ${zipcode}, ${err.message}`
            throw err
        }
    }

    async enterlogin(testid: string, login: string){
        if(!login) throw Error(`Given Login: ${login} is not valid `)
        try {
            login = login.trim()
            await this.typeInto(await this.loginInputBox, login)
            reporter.addStep(testid, "info", `Login: ${login} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Login: ${login}, ${err.message}`
            throw err
        }
    }

    async enterpassword(testid: string, password: string){
        if(!password) throw Error(`Given Password: ${password} is not valid `)
        try {
            password = password.trim()
            await this.typeInto(await this.passwordInputBox, password)
            reporter.addStep(testid, "info", `Password: ${password} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering Password: ${password}, ${err.message}`
            throw err
        }
    }

    async enterconfrim(testid: string, confrim: string){
        if(!confrim) throw Error(`Given Confrim: ${confrim} is not valid `)
        try {
            confrim = confrim.trim()
            await this.typeInto(await this.confirmInputBox, confrim)
            reporter.addStep(testid, "info", `Confrim Password: ${confrim} entered sucessfully`)
            // await browser.debug()
            await browser.pause(5000)
        } catch (err) {
            err.message = `Error entering confirm Password: ${confrim}, ${err.message}`
            throw err
        }
    }

    async clicknewsletterradioBtn(testid: string) {
        try{
            await this.click(await this.newsletterRadioBtn)
            reporter.addStep(testid, "info", `News letter radio button clicked`)
        } catch (err) {
            err.message = `Error clicking Login or register button, ${err.message}`
            throw err
        }

    }

    async clickagreecheckbox(testid: string) {
        try{
            await this.click(await this.agreeCheckBox)
            reporter.addStep(testid, "info", `Agree check box clicked`)
        } catch (err) {
            err.message = `Error clicking Login or register button, ${err.message}`
            throw err
        }

    }

    async clickcontinuetbtn(testid: string) {
        try{
            await this.click(await this.contiuneBtn)
            reporter.addStep(testid, "info", `Login or register button clicked`)
        } catch (err) {
            err.message = `Error clicking Login or register button, ${err.message}`
            throw err
        }

    }

    
    /** call all fields */
    // async CreateAccount(testid: string, firstname: string){
    //     try {
    //         await this.enterfirstname(testid, firstname)


    //     } catch(err){
    //         throw err
    //     }
    // }

}

export default new AccountPage()