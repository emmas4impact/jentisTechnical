import { LoginPage } from '../pages/LoginPage';
import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page, baseURL }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
        await use(loginPage);
    },
});