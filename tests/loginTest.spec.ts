import {test, expect} from '../fixtures/testFixtures';


test('Verify Login Tests', async ({page, landingPage, dashBoardPage}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Enter email and password
    await landingPage.enterEmailId('Admin');
    await landingPage.enterPassword('admin123');
    // Click on login button
    await landingPage.clickLoginButton();
    // Verify that the user is redirected to the dashboard
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // Verify that the user is logged in by checking the presence of the user button
    await expect(dashBoardPage.userButton).toBeVisible();
    // Click on the user button and then log out
    await dashBoardPage.clickLoginButton();
    // Verify that the user is logged out by checking the presence of the login button
    await expect(landingPage.loginButton).toBeVisible();
    // Verify that the user is redirected to the login page
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
});


