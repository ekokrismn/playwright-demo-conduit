import { Page } from '@playwright/test';
import { ConduitLoginPage } from '../pages/loginPage';

export class LoginFlows {
  readonly loginPage: ConduitLoginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new ConduitLoginPage(page);
  }

  //Use case in Login page
  async successfullLoginFlow() {
    await this.loginPage.goToConduitPage();
    await this.loginPage.goToSignInPage();
    await this.loginPage.fillLoginForm();
    await this.loginPage.submitLogin();
    await this.loginPage.assertionSuccessfulLogin();
  }

  async failedLoginFLow() {
    await this.loginPage.goToConduitPage();
    await this.loginPage.goToSignInPage();
    await this.loginPage.invalidLoginForm();
    await this.loginPage.submitLogin();
    await this.loginPage.assertionErrorMessageLoginFailed();
  }
}