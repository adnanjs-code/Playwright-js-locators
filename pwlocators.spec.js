
import {test,expect} from'@playwright/test';
test ('orange hrm locaters',async ({page})=>{
    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByLabel ('password');
    console.log( await page.getByLabel ('password'));
    await page.getByPlaceholder ("username").fill("Admin");
    await page.getByPlaceholder ("password").fill("admin123");
    await page.getByRole ("button", {name:'Login'}).click();
    await page.getByAltText ("profile picture").click();
    await page.getByText ("Logout").click();
    await page.waitForTimeout(5000);
});



//Exploring playwright locators and using it in a Website.
//Tasks- 1-going to a webpage by putting url. 
    //2- using page.getByLabel locator to validate the page.
    //3- using page.getPlaceholder locator to input without label.
    //4- using page.getByRole locator for locating buttons,checklist,heading,etc.
    //5- using page.getByText locator for locating div,span,boolean,strings,etc.
    //6- using page.getByAltText locator for images,map areas,etc.
