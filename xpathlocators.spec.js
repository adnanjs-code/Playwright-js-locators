import {test,expect} from'@playwright/test';
test ('orange hrm xpath/css locaters',async ({page})=>{
    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByLabel ('password');
    console.log( await page.getByLabel ('password'));
    await page.locator ('//input[@name="username"]').fill("Admin");
    await page.locator ('xpath=//input[@name="password"]').fill("admin123");
    await page.locator ('css=button[type="submit"]').click();
    await page.getByAltText ("profile picture").click();
    await page.getByText ("Logout").click();
    await page.waitForTimeout(5000);
});


//here different types of locators are there by using xpath and css.
//such as xpath, css and by using chrome extension such as selectors hub.
//it makes script easy quick and crisp.