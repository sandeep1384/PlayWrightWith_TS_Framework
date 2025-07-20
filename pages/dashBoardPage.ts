import {Locator, Page} from '@playwright/test';
import BasePage from './basePage';

export class DashBoardPage extends BasePage {
  readonly page: Page;
  readonly userButton: Locator;
  readonly logOutButton: Locator;
  

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userButton = page.locator('.oxd-userdropdown-tab');
        this.logOutButton = page.locator('//a[normalize-space()="Logout"]');
    }

    async clickLoginButton() {
        await this.clickElement(this.userButton);
        await this.clickElement(this.logOutButton);
    }
    
}