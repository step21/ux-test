const chai = require('chai');
const expect = chai.expect;
const { Builder, By, Key } = require('selenium-webdriver');

describe('Factorial Calculator Webapp', () => {
  let driver;

  beforeEach(async () => {
    driver.Manage().Timeouts().implicitlyWait(100000); // Increase timeout to 10 seconds
    driver = await new Builder().forBrowser('firefox')
                                .setChromeOptions({
                                    args: ['--headless']
                                })
                                .build();

    await driver.get('http://localhost:8000'); // Assuming webapp runs on port 8000
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should calculate the factorial of 0 correctly', async () => {
      this.timeout(0);
    const numberInput = await driver.findElement(By.id('number'));
    await numberInput.sendKeys('0');

    const calculateButton = await driver.findElement(By.css('button'));
    await calculateButton.click();

    const resultElement = await driver.findElement(By.id('result'));
    const resultText = await resultElement.getText();

    expect(resultText).to.equal('Factorial of 0 is: 1');
  });

  it('should calculate the factorial of 5 correctly', async () => {
    const numberInput = await driver.findElement(By.id('number'));
    await numberInput.sendKeys('5');

    const calculateButton = await driver.findElement(By.css('button'));
    await calculateButton.click();

    const resultElement = await driver.findElement(By.id('result'));
    const resultText = await resultElement.getText();

    expect(resultText).to.equal('Factorial of 5 is: 120');
  });

  it('should handle invalid input (non-numbers)', async () => {
    const numberInput = await driver.findElement(By.id('number'));
    await numberInput.sendKeys('hello');

    const calculateButton = await driver.findElement(By.css('button'));
    await calculateButton.click();

    const resultElement = await driver.findElement(By.id('result'));
    const resultText = await resultElement.getText();

    expect(resultText).to.include('NaN');
  });
});
