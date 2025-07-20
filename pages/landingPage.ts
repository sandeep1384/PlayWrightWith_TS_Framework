import {Locator, Page} from '@playwright/test';
import BasePage from './basePage';

export class LandingPage extends BasePage {
  readonly page: Page;
  readonly emailIdTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailIdTextBox = page.locator('input[placeholder="Username"]');
    this.passwordTextBox = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

    async enterEmailId(emailId: string){
        await this.fillFormField(this.emailIdTextBox, emailId);
    }

    async enterPassword(password: string){
        await this.fillFormField(this.passwordTextBox, password);
    }
    async clickLoginButton() {
        await this.clickElement(this.loginButton);
    }
    
}