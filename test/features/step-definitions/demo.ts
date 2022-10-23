import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    console.log("Before opening browser...");
    await browser.url("https://www.google.com")
    await browser.pause(7000)
    console.log("After opening browser...");
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log("> searchItem: ${searchItem}");
    let ele = await $("[name=q")
    await ele.setValue(searchItem)
    await ele.keys("Enter")
})

Then(/^Click on first search result$/, async function(){
    let ele = await $('<h3>')
    ele.click()
    // await browser.pause(7000)
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log('>> expectedURL: ${expectedURL}');
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})
/*** 
 * Web Interactions
 * */
Given(/^A web page is opened$/, async function (){
    await browser.url("/inputs")
    await browser.pause(7000)
    await browser.setTimeout({implicit:15000, pageLoad: 10000})
    await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function(){
/**
 * Input Box: 
 * Actions:
 * 1. Type into input box
 * 2. Clear the field and type or just add value 
 * 3. click and type 
 * 4. slow typing
 */
    let num = 1234 
    let strNum = num.toString()

    let ele = await $('[type=number')
    await ele.click()
   // await ele.setValue(num)
    /*await ele.addValue("1234")
      await ele.moveto 
      await ele.scrollIntoView()
    browser.debug */

    for(let i=0; i<strNum.length; i++){
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }
    
    

})