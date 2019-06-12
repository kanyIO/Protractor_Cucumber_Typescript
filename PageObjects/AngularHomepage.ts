import { ElementFinder, element, by } from "protractor";

export class AngularHomepage
{
    angularLink:ElementFinder;
    search:ElementFinder;

    constructor()
    { 
        this.angularLink=element(by.linkText("angular.io"));
        this.search=element(by.css("input[type='search']"));
    }
}


