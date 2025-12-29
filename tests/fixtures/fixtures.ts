import { test as base } from '@playwright/test';
import { LoginFlows } from '../flows/loginFlows';
import { SignUpFlows } from '../flows/signUpFlows';

export const test = base.extend<{ 
    loginFlows: LoginFlows
    signUpFlows: SignUpFlows,
    
}>({
    loginFlows: async ({page}, use) => {
        const loginFlows = new LoginFlows(page);
        await use(loginFlows);
    },
    signUpFlows: async ({page}, use) => {
        const signUpFlows = new SignUpFlows(page);
        await use(signUpFlows);
    }
});