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
    await browser.url("https://the-internet.herokuapp.com/tables")
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
   // let num = 1234 
    //let strNum = num.toString()

   // let ele = await $('[type=number')
   // await ele.click()
   // await ele.setValue(num)
    /*await ele.addValue("1234")
      await ele.moveto 
      await ele.scrollIntoView()
    browser.debug */

   // for(let i=0; i<strNum.length; i++){
   //     let charStr = strNum.charAt(i)
     //   await browser.pause(1000)
       // await browser.keys(charStr)
    //}
    
/**
 * 2.Dropdown  
 * Actions:
 * 1.Asser default option is selected
 * 2. Select by attribute, text, index
 * 3. Get a list of options
 *  */    
 
// * Assert default option is selected
// let ele = await $('//select/option[@selected="selected"]')
// let val = await ele.getText()
// chai.expect(val).to.equal("Please select an option")

//* Select a specific option
// let dd_ele = await $('#dropdown')
// await dd_ele.selectByVisibleText("Option 2")
// await dd_ele.selectByAttribute("value", "1")
// await dd_ele.selectByIndex(2)

//* Get a list of option 
// let eleArr = await $$('select > option')
// let arr = []
// for (let i = 0; i<eleArr.length; i++) {
//     let ele = eleArr[i]
//     let val = await ele.getText()
//     arr.push(val)
//     console.log(val);
// }
// console.log('>> option Array: ${arr}');

/**
*3. checkbox 
 *Actions:
 1.select an option
 2.unselect an option(if selected)
 3. Assert if option is selected
 4. Select all options
 * */
// let ele = await $('//form[@id="checkboxes"]/input[1]')
// if (!await ele.isSelected()){
//     await ele.click()
// }

// assert
// let ele = await $('//form[@id="checkboxes"]/input[2]')
// let isChecked = await ele.isSelected()
// chai.expect(isChecked).to.be.false

//select all
// let eleArr = await $$('//form[@id="checkboxes"]/input')
// for (let i=0; i< eleArr.length; i++){
//     let ele = eleArr[i]
//     if(!await ele.isSelected()){
//         ele.click()
//     }
// }

/**
 * 4. Windows handling 
 * Steps: 
 * 1. Launch the browser
 * 2. Open another windows 
 * 3. Switch to the window based on the title 
 * 4. Switch back to the main window
 * 
 * Methods used:
 * 1. getTitle()
 * 2. getWindowHandle()
 * 3. getWindowHandles()
 * 4. switchToWindow()
 */
//open new windos
// await $('=Click Here').click()
// await (await $('=Elemental Selenium')).click()
// let cureentWinTitle = await browser.getTitle()
// let parentWinHandle = await browser.getWindowHandle()
// console.log('>> currentWindowTitle:', cureentWinTitle);

// //switch to specific window
// let winHandles = await browser.getWindowHandles()
// for (let i = 0; i < winHandles.length; i++){
//     console.log('>> win handles:', winHandles[i]);
//     await browser.switchToWindow(winHandles[i])
//     let currentWinTitle = await browser.getTitle()
//     if (currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
//         await browser.switchToWindow(winHandles[i])
//         let headerTxtEleSel = await $('<h1>').getText()
//         console.log('>> headerTxtxEleSel:', headerTxtEleSel);
//         //Rest of the actions go here....
//         break

//     }
// }
// //browser.switchWindow()
// //Switch back to parent window
// await browser.switchToWindow(parentWinHandle)
// let parentWinHeaderTxt = await $('<h3>').getText()
// console.log('>> parentwinHeaderTxt:', parentWinHeaderTxt);
// //continue with rest of the execution


/**
 * 4. Handling alters
 * 
 * Methods used:
 * 1. isAlertOpen()
 * 2. acceptAlert()
 * 3. dismissAlert()
 * 4. getAlerttext()
 * 5. sendAlertText()
 */
// await $('button=Click for JS Alert').click()
// if (await browser.isAlertOpen()){
//     await browser.acceptAlert()
// }
// await $('button=Click for JS Confirm').click()
// if (await browser.isAlertOpen()){
//     await browser.dismissAlert()
//     await browser.pause(2000)
// }
// await $('button=Click for JS Prompt').click()
// if (await browser.isAlertOpen()){
//     let alertText = await browser.getAlertText()
//     console.log('>> alerttext:',alertText );
//     await browser.sendAlertText('Hello Js Prompt...')
//     await browser.pause(2000)
//     await browser.acceptAlert()
//     await browser.pause(2000)
// }

/**
 * 5. File upload
 */
// console.log(process.cwd());
// await $('#file-upload').addValue('${process.cwd()}/data/dummy.txt')
// await $('#file-submit').click()

/**
 * 6. Frames
 * *Methods:
 * 1. switchToFrame
 * 2. swithcToParentFrame
 */
// await $('=iFrame').click()
// let ele = await $('#mce_0_ifr')
// await browser.switchToFrame(ele)
    //interaction with frames
        //await await $('#tinymce').click()
        //await browser.keys(["Meta", "A"])
        //await browser.pause(1000)
        //await browser.keys("Delete")
// await (await $('#tinymce')).setValue('typing into frame....')
// await browser.switchToParentFrame()

/**
 * 7. scrolling 
 * Methods: (Element methods)
 * 1. scrollIntoView
 */

// await $('span=Best Sellers in Books').scrollIntoView()
// await $('span=Best Sellers in Books').scrollIntoView(false)

/** 
 * Web Table:
 * What are going to cover 
 * 1. Check number of rows and columns 
 * 2. Get whole table data 
 * 3. Get singel row [based on condition]
 * . Get single column
 * 5. Get single cell value [base on another cell]
 */
/** 1. Check number of rows and columns  */
// let rowCount = await  $$('//table[@id="table1"]/tbody/tr').length
// chai.expect(rowCount).to.equal(4)
// console.log('>> Number of rows:',rowCount );
// let colCount = await $$('//table[@id="table1"]/thead/tr/th').length
// console.log('>> Number of columns:',colCount );
// chai.expect(colCount).to.equal(6)
//*[@id="table1"]/tbody/tr[1]
//*[@id="table1"]/tbody/tr[1]
//*[@id="table1"]/thead/tr

/**  Get whole table data  */
// let arr = []
// for (let i=0; i< rowCount; i++) {
//     let personObj = {
//         lastname: "",
//         firstname: "",
//         email: "",
//         due: "",
//         web: "",
//     }
//     for (let j=0; j< colCount; j++){
//         let cellVal = await (await $('//table[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]')).getText()
//         // console.log('>> Cell Value:', ${cellVal});
//         if (j == 0) personObj.lastname = cellVal
//         if (j == 1) personObj.firstname = cellVal
//         if (j == 2) personObj.email = cellVal
//         if (j == 3) personObj.due = cellVal
//         if (j == 4) personObj.web = cellVal
//     }
//     arr.push(personObj)
// }
// console.log('Whole table:${JSON.strungify(arr)}');

//**4 Get Single column */
// let arr = []
// for (let i = 0;i < rowCount; i++){
//     let cellVal = await (await $('//table[@id="table1"]/tbody/tr[${i+1}]/td[4]')).getText()
//     arr.push(cellVal)
// }
//     console.log('>> Single col values:', arr);

/** Get Single cell value  [based on another cell*/

// let arr = []
// for (let i = 0;i < rowCount; i++){
//         // let cellVal = await (await $('//table[@id="table1"]/tbody/tr[${i+1}]/td[4]')).getText()  
//         let price = await $('//table[@id="table1"]/tbody/tr[${i+1}]/td[4]').getText() 
//         let firstname = await $(await $('//table[@id="table1"]/tbody/tr[${i+1}]/td[2]')).getText()  
//         if (+(price.replace("$", ""))> 50 ){
//             arr.push(firstname)
//         }  
// }
//     console.log('>> Single col values:', arr);



/** Scrolling 
 * 
 * VISIBLE PORTION 
 * windows object:
 * 1. scrollBy
 * Y -> [-]window.innerHeight
 */
//Scroll down 
// await browser.execute(() => {
//     window.scrollBy(0, window.innerHeight)
// })
//  await browser.pause(2000)

//  //Scroll up 
// await browser.execute(() => {
//     window.scrollBy(0, -window.innerHeight)
// })

// /** INVISIBLE PORTION 
//  * windows object:
//  * 1. scrollBy
//  * Y -> document.body.scrollTop[scrollHeight]
//  */
//  await browser.pause(2000)
// await browser.execute(() => {
//     window.scrollBy(0, document.body.scrollHeight)
// })
//  await browser.pause(2000)
// await browser.execute(() => {
//     window.scrollBy(0, document.body.scrollTop)
// })

await browser.debug()

})