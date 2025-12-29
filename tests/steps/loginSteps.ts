import { expect, Page } from '@playwright/test';
import { ConduitLoginPage } from '../pages/loginPage';

export class LoginSteps {
  readonly loginPage: ConduitLoginPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new ConduitLoginPage(page);
  }

  // Navigate to Conduit main page
  async goToConduitPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async goToSignInPage() {
    await this.loginPage.navigateToSignInPage.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Fill in login form with valid credentials
  async fillLoginForm() {
    const email: string = process.env.validEmail!;
    const password: string = process.env.validPassword!;
    await this.loginPage.emailField.fill(email);
    await this.loginPage.passwordField.fill(password);
  }

  // Fill in login form with invalid credentials
  async invalidLoginForm() {
    const email: string = process.env.invalidEmail!;
    const password: string = process.env.invalidPassword!;
    await this.loginPage.emailField.fill(email);
    await this.loginPage.passwordField.fill(password);
  }

  // Action for clicking elements
  async submitLogin() {
    await this.loginPage.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Action for assertions elements
  async assertionSuccessfulLogin() {
    await this.loginPage.profileButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.loginPage.usernameAfterLogin).toBeVisible();
  }

  async assertionErrorMessageLoginFailed() {
    await expect(this.loginPage.errorMessageLoginFailed).toBeVisible();
    const expectedErrorMessage: string = 'email or password is invalid';
    await expect(this.loginPage.errorMessageLoginFailed).toHaveText(expectedErrorMessage);
  }

  //Use case in Login page
  async successfullLoginFlow() {
    await this.goToConduitPage();
    await this.goToSignInPage();
    await this.fillLoginForm();
    await this.submitLogin();
    await this.assertionSuccessfulLogin();
  }

  async failedLoginFLow() {
    await this.goToConduitPage();
    await this.goToSignInPage();
    await this.invalidLoginForm();
    await this.submitLogin();
    await this.assertionErrorMessageLoginFailed();
  }
}