import { type Locator, type Page, expect} from '@playwright/test';

export class ConduitLoginPage {
    readonly page: Page;
    readonly navigateToSignInPage: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;
    readonly profileButton: Locator;
    readonly usernameAfterLogin: Locator;
    readonly errorMessageLoginFailed: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToSignInPage = page.locator('text=Sign In');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.profileButton = page.getByRole('link', { name: 'ekokrismndemo' });
    this.usernameAfterLogin = page.getByRole('heading', { level: 4, name: 'ekokrismndemo' });
    this.errorMessageLoginFailed = page.locator('li', { hasText: 'email or password is invalid' });
  }

  // Navigate to Conduit main page
  async goToConduitPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async goToSignInPage() {
    await this.navigateToSignInPage.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Action for filling in login form with valid credentials
  async inputValidEmail() {
    const email: string = process.env.validEmail!;
    await this.emailField.fill(email);
  }

  async inputValidPassword() {
    const password: string = process.env.validPassword!;
    await this.passwordField.fill(password);
  }

  async fillLoginForm() {
    const email: string = process.env.validEmail!;
    const password: string = process.env.validPassword!;
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  // Action for filling in login form with invalid credentials
  async inputInvalidEmail() {
    const email: string = process.env.invalidEmail!;
    await this.emailField.fill(email);
  }

  async inputInvalidPassword() {
    const password: string = process.env.invalidPassword!;
    await this.passwordField.fill(password);
  }

  async invalidLoginForm() {
    const email: string = process.env.invalidEmail!;
    const password: string = process.env.invalidPassword!;
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  // Action for clicking elements
  async submitLogin() {
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Action for assertions elements
  async assertionSuccessfulLogin() {
    await this.profileButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.usernameAfterLogin).toBeVisible();
  }

  async assertionErrorMessageLoginFailed() {
    await expect(this.errorMessageLoginFailed).toBeVisible();
    const expectedErrorMessage: string = 'email or password is invalid';
    await expect(this.errorMessageLoginFailed).toHaveText(expectedErrorMessage);
  }
}