const { expect } = require('chai');

describe('Factorial Calculator Test', function() {

    before(async function() {
        await browser.url('http://127.0.0.1:3000/');
    });

    it('should calculate factorial correctly', async function() {
        await $('#numberInput').setValue('5');
        await $('#calculateButton').click();

        let result = await $('#result').getText();
        expect(result).to.include('Factorial: 120');
    });
});

// chai does not allow for arrow functions because of some binding of the test
describe('Contributoragreements.org tests', function() {
    before(async function() {
        await browser.url('https://contributoragreements.org/ca-cla-chooser/');
    });

    it('should show contributoragreements title', async function () {
        let title = await browser.getTitle();
        expect(title).to.equal('Contributor License Agreement Chooser');
    });

});

describe('DuckDuckGo search', function()  {

    before(async function() {
    await browser.url('https://duckduckgo.com');
    });
    it('Searches for WebdriverIO', async () => {
        await browser.url('https://duckduckgo.com/?t=h_&q=WebdriverIO&ia=web')

//        await driver.findElement(By.id("search_form_input")).sendKeys('WebdriverIO'); //, Key.RETURN);
        //await driver.findElement(By.id("searchbox_input")).sendKeys(Keys.ENTER);
        await $('#search_button').click();

        let title = await browser.getTitle()
        expect(title).to.equal('WebdriverIO at DuckDuckGo')
        // or just
        //await expect(driver).toHaveTitle('WebdriverIO at DuckDuckGo')
    });

})


