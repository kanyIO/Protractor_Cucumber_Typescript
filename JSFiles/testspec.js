"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calc_1 = require("./PageObjects/Calc");
const AngularHomepage_1 = require("./PageObjects/AngularHomepage");
//import { Calculator } from "./JSFiles/PageObjects/CAlc";
describe("Working with Chain Locators", () => {
    // instead of using function() , use () => fat arrow for unnamed functions. Must have ES6 js ver compiler
    it("Open Angular js website", () => __awaiter(this, void 0, void 0, function* () {
        let Yoza = new Calc_1.Calculator(); /// Yoza is the new var / cal object which should call the new class to be imported from calc.ts
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        //repeater ,  chain locators, And css for identical tags
        yield Yoza.firstEditBox.sendKeys("3"); //await element(by.model("first")).sendKeys("3");
        yield Yoza.secondEditBox.sendKeys("5"); //await element(by.model("second")).sendKeys("5").then(function(){
        yield protractor_1.browser.sleep(1000);
        yield Yoza.go.click(); // element(by.id("gobutton")).click();
        Yoza.getResult.getText().then(function (text) {
            //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            protractor_1.browser.sleep(1000);
            console.log(text);
        });
    }));
    it("AngularHome page", () => __awaiter(this, void 0, void 0, function* () {
        let Ang = new AngularHomepage_1.AngularHomepage();
        yield protractor_1.browser.get("https://angularJS.org");
        yield Ang.angularLink.click();
        yield Ang.search.sendKeys("YOOOOZAAA");
        yield protractor_1.browser.sleep(5000);
    }));
});
//"webdriver-update":"./node_modules/protractor/.bin/webdriver-manager"
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBR2xELDZDQUFnRDtBQUNoRCxtRUFBZ0U7QUFDaEUsMERBQTBEO0FBRTFELFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFDM0MseUdBQXlHO0lBQ3pHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBVSxFQUFFLENBQUMsQ0FBQyxnR0FBZ0c7UUFFN0gsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQy9ELHdEQUF3RDtRQUN4RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaURBQWlEO1FBQ3hGLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrRUFBa0U7UUFDMUcsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxzQ0FBc0M7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3pDLDRHQUE0RztZQUM1RyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDaEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBR0gsdUVBQXVFIn0=