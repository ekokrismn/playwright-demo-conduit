import { type Locator, type Page, expect } from '@playwright/test';

export class ConduitSignUpPage {
    readonly page: Page;
    readonly navigateToSignUpPageButton: Locator;
    readonly usernameField: Locator;
    readonly emailField: Locator
    readonly passwordField: Locator;
    readonly signUpButton: Locator;
    readonly headersPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToSignUpPageButton = page.locator('text=Sign Up');
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    this.headersPageTitle = page.locator('h1', { hasText: 'Sign up' })
  }

  // Navigate to Conduit main page
  async goToConduitPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  // Navigate to Sign Up Page
  async goToSignUpPage() {
    await this.navigateToSignUpPageButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Action for filling in Sign Up form with valid data or input
  async inputUsernameField(username: string) {
    await this.usernameField.fill(username);
  }

  async inputEmailField(email: string) {
    await this.emailField.fill(email);
  }

  async inputPasswordField(password: string) {
    await this.passwordField.fill(password);
  }

  async fillSignUpForm() {
    const username: string = 'demousereko';
    const email: string = 'demoekoemail@mail.com';
    const password: string = 'demopasswordeko';
    await this.usernameField.fill(username);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  // Action for assertions
  async assertHeaders() {
    await expect(this.headersPageTitle).toBeVisible();
  }

  // Action for clicking elements
  async submitSignUp() {
    await this.signUpButton.click();
  }
}