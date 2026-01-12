exports.config = {
  runner: 'local',

  port: 4723,

  specs: ['./features/**/*.feature'],

  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/path/to/your/app.apk'
  }],

  services: ['appium'],

  framework: 'cucumber',

  reporters: ['spec'],

  cucumberOpts: {
    require: ['./features/step-definitions/*.js'],
    timeout: 60000
  }
};
