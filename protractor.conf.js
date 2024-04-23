exports.config = {
  // Адрес Selenium Server (WebDriver)
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Список спецификаций тестов
  specs: ['spec.js'],

  // Настройки для подключаемых браузеров
  multiCapabilities: [
    {
      browserName: 'chrome'
    },
    {
      browserName: 'firefox'
    }
  ],

  // Фреймворк для написания тестов (например, Jasmine, Mocha)
  framework: 'jasmine',

  // Настройки Jasmine
  jasmineNodeOpts: {
    showColors: true, // выводить цветные результаты тестов
    defaultTimeoutInterval: 30000 // таймаут для тестов в миллисекундах
  },

  // Преобразователь для удобного отображения результатов тестов
  onPrepare: function () {
    // Настройки для отображения в формате Allure (опционально)
    const { SpecReporter } = require('jasmine-spec-reporter');
    const { AllureReporter } = require('jasmine-allure-reporter');

    // Добавляем отчет в формате Allure
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    // Добавляем отчет в консоль
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },

  // Дополнительные настройки, если необходимо
  // Например, baseUrl для запуска тестов на определенной странице
  // baseUrl: 'http://localhost:4200/'
};




