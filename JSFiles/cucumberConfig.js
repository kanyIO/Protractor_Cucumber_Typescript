"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    //framework: 'jasmine',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        // tags:"@AngularTesting",
        format: 'json:./cucumberreport.json',
        require: [
            './StepDefinitions/*.js' // accepts a glob
        ]
        // You could set no globals to true to avoid jQuery '$' and protractor '$'
        // collisions on the global namespace.
        //noGlobals: true
    }
};
onComplete: () => {
    var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version": "0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxpRUFBbUQ7QUFDeEMsUUFBQSxNQUFNLEdBQVc7SUFDdEIsdUJBQXVCO0lBRTNCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFFbkMsWUFBWSxFQUFFO1FBQ2IsMEJBQTBCO1FBQ3pCLE1BQU0sRUFBQyw0QkFBNEI7UUFFbkMsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUEsaUJBQWlCO1NBQzFDO1FBRUgsMEVBQTBFO1FBQzFFLHNDQUFzQztRQUN0QyxpQkFBaUI7S0FDbEI7Q0FDQSxDQUFBO0FBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUNmLElBQUksT0FBTyxHQUFHO1FBQ1osS0FBSyxFQUFFLFdBQVc7UUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1FBQ2hDLHNCQUFzQixFQUFFLElBQUk7UUFDNUIsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUSxFQUFFO1lBQ04sYUFBYSxFQUFDLE9BQU87WUFDckIsa0JBQWtCLEVBQUUsU0FBUztZQUM3QixTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFVBQVUsRUFBRSxRQUFRO1NBQ3ZCO0tBQ0osQ0FBQztJQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHM0IsQ0FBQyxDQUFDIn0=