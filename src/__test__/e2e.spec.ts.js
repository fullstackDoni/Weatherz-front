const { browser, element, by } = require('protractor');

describe('Frontend Tests', () => {
  beforeAll(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Your App Title'); // Замените на актуальный заголовок вашего приложения
  });

  it('should display weather information after searching for a city', () => {
    const searchInput = element(by.css('input[type="text"]'));
    const searchButton = element(by.css('button[type="submit"]'));

    searchInput.sendKeys('London');
    searchButton.click();

    const weatherInfo = element(by.css('.weather-info')); // Замените на селектор, который указывает на блок с информацией о погоде

    expect(weatherInfo.isPresent()).toBe(true);
  });

  // Добавьте другие тесты по вашему выбору
});
