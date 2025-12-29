import { test } from '../fixtures/fixtures';

test('user can sign up', async ({ signUpSteps }) => {
  await signUpSteps.successfulSignUpFlow();
});