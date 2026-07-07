const {test, expect} = require('@playwright/test');

test('Browser playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

});

test('Page playwright test', async ({page}) => {
    await page.goto('https://google.com');
    //expect(await page.title()).toBe('Google');
    await expect(page).toHaveTitle('Google');
});

test('Negative test cases to Login page', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshetty');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password.');
});

test('Positive test cases to Login page', async ({page}) => {
    const cardTitles = page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});