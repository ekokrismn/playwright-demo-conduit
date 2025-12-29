import { test } from '../fixtures/fixtures';

test('user can sign up', async ({ signUpFlows }) => {
  await signUpFlows.successfulSignUpFlow();
});