import { test } from '../fixtures/fixtures';

test('Successfully Login to Conduit web', async ({ loginFlows }) => {
  await loginFlows.successfullLoginFlow();
});

test('Failed Login to Conduit web', async ({ loginFlows }) => {
  await loginFlows.failedLoginFLow();
});