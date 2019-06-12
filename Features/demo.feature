Feature: Validating calc app
 
@calculatortesting
Scenario: Calculator Add functionality testing

Given I will navigate to Calc Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"


@calculatortesting
Scenario: Calculator Add functionality testing no 2

Given I will navigate to "calc" page
When I add two numbers "2" and "7"
Then the output displayed should be "9"



@AngularTesting
Scenario Outline:  Angular validations
Scenario: Click some links and enter stuff on an edit box

Given I will navigate to "AngularJs" page
When I clicked on header link
And navigate to angular page
Then Type in "Yabba dabba doo" in the search box!