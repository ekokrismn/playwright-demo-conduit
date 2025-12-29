import { type Locator, type Page } from '@playwright/test';

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
}