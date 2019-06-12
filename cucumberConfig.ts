//first import config from protracctor
import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";
export let config: Config = {
      //framework: 'jasmine',

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file
  
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['../Features/demo.feature'],

  cucumberOpts: {
   // tags:"@AngularTesting",
    format:'json:./cucumberreport.json',
   
    require: [
      './StepDefinitions/*.js'// accepts a glob
    ]   

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  //noGlobals: true
}
}
onComplete: () =>{
  var options = {
    theme: 'bootstrap',
    jsonFile: './cucumberreport.json',
    output: './cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);


};
