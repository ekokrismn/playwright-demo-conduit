// steps/signUpSteps.ts
import { Page } from '@playwright/test';
import { ConduitSignUpPage } from '../pages/signupPage';

export class SignUpFlows {
  readonly signUpPage: ConduitSignUpPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.signUpPage = new ConduitSignUpPage(page);
  }

  async successfulSignUpFlow() {
    await this.signUpPage.goToConduitPage();
    await this.signUpPage.goToSignUpPage();
    await this.signUpPage.assertHeaders();
    await this.signUpPage.fillSignUpForm();
    await this.signUpPage.submitSignUp();
  }
}
