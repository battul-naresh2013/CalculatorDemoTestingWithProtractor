// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['calculatorDemo.spec.js'],
  multiCapabilities: [{browserName: 'chrome'}]
}