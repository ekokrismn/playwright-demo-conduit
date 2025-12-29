import { test as base } from '@playwright/test';
import { LoginSteps } from '../steps/loginSteps';
import { SignUpSteps } from '../steps/signUpSteps';

export const test = base.extend<{ 
    loginSteps: LoginSteps
    signUpSteps: SignUpSteps,
    
}>({
    loginSteps: async ({page}, use) => {
        const loginSteps = new LoginSteps(page);
        await use(loginSteps);
    },
    signUpSteps: async ({page}, use) => {
        const signUpSteps = new SignUpSteps(page);
        await use(signUpSteps);
    }
});