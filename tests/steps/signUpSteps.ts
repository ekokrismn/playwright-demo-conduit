// steps/signUpSteps.ts
import { expect, Page } from '@playwright/test';
import { ConduitSignUpPage } from '../pages/signupPage';

export class SignUpSteps {
  readonly signUpPage: ConduitSignUpPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.signUpPage = new ConduitSignUpPage(page);
  }

  async goToConduitPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async goToSignUpPage() {
    await this.signUpPage.navigateToSignUpPageButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillSignUpForm() {
    const username: string = 'demousereko';
    const email: string = 'demoekoemail@mail.com';
    const password: string = 'demopasswordeko';
    await this.signUpPage.usernameField.fill(username);
    await this.signUpPage.emailField.fill(email);
    await this.signUpPage.passwordField.fill(password);
  }

  async assertHeaders() {
    await expect(this.signUpPage.headersPageTitle).toBeVisible();
  }

  async submitSignUp() {
    await this.signUpPage.signUpButton.click();
  }

  async successfulSignUpFlow() {
    await this.goToConduitPage();
    await this.goToSignUpPage();
    await this.assertHeaders();
    await this.fillSignUpForm();
    await this.submitSignUp();
  }
}
