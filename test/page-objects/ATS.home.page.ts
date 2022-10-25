import Page from "./page"
import chai from "chai"
import reporter from "../helper/reporter"

class HomePage extends Page{
    constructor() {
        super()
    }

    /** Page Objects  */
    get LoginorregisterBtn() { return $('#customer_menu_top')}
    get ContinueBtn() { return $('#accountFrm')}
    


    /** Page Actions */
    async clickLoginorregisterBtn(testid: string) {
        try{
            await this.click(await this.LoginorregisterBtn)
            reporter.addStep(testid, "info", `Login or register button clicked`)
        } catch (err) {
            err.message = `Error clicking Login or register button, ${err.message}`
            throw err
        }

    }

    async clickContinueBtn(testid: string) {
        try{
            await this.click(await this.ContinueBtn)
            reporter.addStep(testid, "info", `Continue button clicked`)
        } catch (err) {
            err.message = `Error clicking Continue button, ${err.message}`
            throw err
        }

    }

    // async RegisterAccount(testid: string) {
    //     try {
    //         await this.LoginorregisterBtn(testid)
    //         await this.ContinueBtn(testid)
    //     } catch (err) {
            
    //     }
    // }


}

export default new HomePage()