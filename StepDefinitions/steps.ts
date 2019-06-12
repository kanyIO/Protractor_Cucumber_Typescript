import { Given,When, Then } from "cucumber";
import { Calculator } from "../PageObjects/Calc";
import { browser } from "protractor";
import { AngularHomepage } from "../PageObjects/AngularHomepage";
import chai from "chai";
var expect = chai.expect;
let Yoza = new Calculator();
let ah = new AngularHomepage();
         Given('I will navigate to Calc Site', async ()=> {
            // Write code here that turns the phrase above into concrete actions
            await browser.get('http://juliemr.github.io/protractor-demo/');
           
          });
          Given('I will navigate to {string} page', async (string)=> {
            // Write code here that turns the phrase above into concrete actions
          if(string=="calc")
          {
            await browser.get('http://juliemr.github.io/protractor-demo/'); 
          }
          else if (string=="AngularJs")
          {
            await browser.get("https://angularjs.org/");
          }
        
          });

          When('I clicked on header link', async ()=> {

            await ah.angularLink.click();
          });
          When('you will navigate to angular page', async ()=> {
          console.log("navigated to new page");
          });
          Then('you will enter {string} in search box', async (string)=> {
            await browser.sleep(3000);
            await ah.search.sendKeys(string);
          });

          When('I add two numbers {string} and {string}',  async(string, string2)=> {
           await Yoza.firstEditBox.sendKeys(string);
           await Yoza.secondEditBox.sendKeys(string2);
         });  

 Then('the output displayed should be {string}', async (string) =>{
           await Yoza.go.click();
          await Yoza.getResult.getText().then(function (text) {
               expect(text).to.equal(string);
          })
         });


 
         Given('I will navigate to {string} page', async (string)=> {
        if(string=="calc")
        {
          await browser.get('http://juliemr.github.io/protractor-demo/'); 
        }
        else if (string=="AngularJs")
        {
          await browser.get("https://angularjs.org/");
        }
        });

        When('I clicked on header link', async ()=> {
          await ah.angularLink.click();
        });
        When('you will navigate to angular page', async ()=> {
        console.log("navigated to new page");
        });

        Then('you will enter {string} in search box', async (string)=> {
          await browser.sleep(3000);
          await ah.search.sendKeys(string);
        });