// import { Then } from "@cucumber/cucumber";
// import reporter from "../../helper/reporter"
// import AccountPage from "../../page-objects/ATS.Create.Account.page"

// /** New Account registeration  */
// Then(/^Create Account by enter all fields$/, async function (firstname) {

//     try {
//         reporter.addStep(this.testid, "info", "Account form fill for new registeration")
//         await AccountPage.CreateAccount(this.testid, firstname)
//     } catch (err) {
//         err.message = `Failed to Create account, ${err.message}`
//         throw err
//     }
// })