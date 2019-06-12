//first import config from protracctor
import {Config} from 'protractor';
exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['testspec.js'],
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  //noGlobals: true

  jasmineNodeOpts: {   //options to be passed to Jasmine-node
  showColors: true,  //use color in command line report

}

};
