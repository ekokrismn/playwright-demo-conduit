import { test } from '../fixtures/fixtures';

test('Successfully Login to Conduit web', async ({ loginSteps }) => {
  await loginSteps.successfullLoginFlow();
});

test('Failed Login to Conduit web', async ({ loginSteps }) => {
  await loginSteps.failedLoginFLow();
});