import { Then } from "@cucumber/cucumber";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProducts){
    if (!noOfProducts) throw Error ('Invalid number provided: ${noOfProducts}')
    let eleArr = await $$('.inventory_item')
    await browser.pause(1000)
    chai.expect(eleArr.length).to.equal(parseInt(noOfProducts)) // ===
} )

/**
 * steps: 
 * 1. Get price list 
 * 2. Convert stiring to number
 * 3. Assert if any value is <=0
 */
Then(/^Validate all products have valid price$/, async function (){
/** 1. Get price list */
let eleArr = await $$('.inventory_item_price')
let pricStrArr = []
for (let i=0; i< eleArr.length; i++){
    let priceStr = await eleArr[i].getText()
    pricStrArr.push(priceStr)
}
   console.log('>> Price with $:', pricStrArr);

   /**Convert stiring to number */
   let priceNumArr = pricStrArr.map(ele => +(ele.replace("$","")))
   console.log('>> Price in Number: ', priceNumArr)
   
   /**Assert if any value is <=0 */
   let invalidPriceArr = priceNumArr.filter(ele => ele <=0)
   chai.expect(invalidPriceArr.length).to.equal(0)

})
