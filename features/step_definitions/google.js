const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;
function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
Given('I open the login page', async function() {
    await testController.navigateTo('https://ads-dev.admixplay.com/login');   
   
});
When('I am typing {string} request {string} and click login button', async function(email,password) {

   await testController.typeText(select('#email'),email);
   await testController.typeText(select('#password'),password);
   await testController.click(select("button[type='submit']"));
  
 
});
Then('I should see dashboard', async function() {
   await testController.expect(select('h1.title').exists).ok();
});

When('I am typing my search request {string} on Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('I press the {string} key on Google', async function(text) {
    await testController.pressKey(text);
});

Then('I should see that the first Google\'s result is {string}', async function(text) {
    var firstLink = Selector('#rso').find('a').with({boundTestRun: testController});
    await testController.expect(firstLink.innerText).contains(text);
});
