import { type Locator, type Page } from '@playwright/test';

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
}