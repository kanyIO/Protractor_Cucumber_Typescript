import { browser, element, by } from "protractor";

import { async } from "q";
import { Calculator } from "./PageObjects/Calc";
import { AngularHomepage } from "./PageObjects/AngularHomepage";
//import { Calculator } from "./JSFiles/PageObjects/CAlc";

describe("Working with Chain Locators", () => {
  // instead of using function() , use () => fat arrow for unnamed functions. Must have ES6 js ver compiler
  it("Open Angular js website", async () => {
    let Yoza = new Calculator(); /// Yoza is the new var / cal object which should call the new class to be imported from calc.ts

    await browser.get("http://juliemr.github.io/protractor-demo/");
    //repeater ,  chain locators, And css for identical tags
    await Yoza.firstEditBox.sendKeys("3"); //await element(by.model("first")).sendKeys("3");
    await Yoza.secondEditBox.sendKeys("5"); //await element(by.model("second")).sendKeys("5").then(function(){
    await browser.sleep(1000);
    await Yoza.go.click(); // element(by.id("gobutton")).click();
    Yoza.getResult.getText().then(function(text) {
      //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
      browser.sleep(1000);
      console.log(text);
    });
  }); 

  it("AngularHome page", async () => {
    let Ang = new AngularHomepage();
    await browser.get("https://angularJS.org");
    await Ang.angularLink.click();
    await Ang.search.sendKeys("YOOOOZAAA");
    await browser.sleep(5000);
  });
});


//"webdriver-update":"./node_modules/protractor/.bin/webdriver-manager"