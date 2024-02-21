const { Builder, By, Key } = require('selenium-webdriver');
const { expect } = require('chai');
const firefox = require('selenium-webdriver/firefox')

describe('Factorial Calculator Test', function() {
    this.timeout(10000);
    let driver;

    before(async function() {
        // configure headless mode
        let options = new firefox.Options();
        options.addArguments("--headless");
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        await driver.get('http://localhost:3000');
    });

    it('should calculate factorial correctly', async function() {
        await driver.get('http://localhost:3000');
        await driver.findElement(By.id('numberInput')).sendKeys('5');
        await driver.findElement(By.id('calculateButton')).click();

        let result = await driver.findElement(By.id('result')).getText();
        expect(result).to.include('Factorial: 120');
    });

    after(async function() {
        await driver.quit();
    });
});

// chai does not allow for arrow functions because of some binding of the test
describe('Contributoragreements.org tests', function() {
    this.timeout(10000);
    let driver;
    // replace with before each?
    before(async function() {
        let options = new firefox.Options();
        options.addArguments("--headless");
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        await driver.get('http://localhost:4000');
    });

    it('should show contributoragreements title', async function () {
        await driver.get('http://localhost:4000');
        let title = await driver.getTitle();
        expect(title).to.equal('contributoragreements.org');
    });

    after(async function() {
        await driver.quit();
    });
});

describe('DuckDuckGo search', function()  {
    this.timeout(10000);
    let driver;

    before(async function() {
    // configure headless mode
    let options = new firefox.Options();
    options.addArguments("--headless");
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    //await driver.get('https://duckduckgo.com');
    });
    it('Searches for WebdriverIO', async () => {
        await driver.get('https://duckduckgo.com/?t=h_&q=WebdriverIO&ia=web')

//        await driver.findElement(By.id("search_form_input")).sendKeys('WebdriverIO'); //, Key.RETURN);
        //await driver.findElement(By.id("searchbox_input")).sendKeys(Keys.ENTER);
        await driver.findElement(By.id("search_button")).click();

        let title = await driver.getTitle()
        expect(title).to.equal('WebdriverIO at DuckDuckGo')
        // or just
        //await expect(driver).toHaveTitle('WebdriverIO at DuckDuckGo')
    });

  after(async function() {
      await driver.quit();
  });
})


