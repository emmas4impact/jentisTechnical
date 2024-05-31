import { test } from '../services/AuthService';
import { expect } from '@playwright/test';
import loginTestCases from '../test-cases/login.json';

test.describe('Login Functionality', () => {
    test.use({ storageState: 'storageState.json' }); 
  

    for (const testCase of loginTestCases.filter(tc => tc.isRegression)) {
        test(testCase.description, async ({ page, loginPage, baseURL}) => {
                
            if (testCase.id === 'UI-TC04') {
                
                await page.goto(`${baseURL}/contactList`);
               
              } else if (testCase.id === 'UI-TC05') {
                await loginPage.fill(loginPage.locators.emailInput, 'invalid-email');
                await loginPage.fill(loginPage.locators.passwordInput, 'invalid-password');
                await loginPage.click(loginPage.locators.loginButton);
              }
        
              if (testCase.id === 'UI-TC04') {
                await expect(page).toHaveURL(`${baseURL}/contactList`);
                
              } else if (testCase.id === 'UI-TC05') {

                await expect(loginPage.locators.errorMessage).toBeVisible(); 
                await expect(loginPage.locators.errorMessage).toContainText(testCase.expectedResult);
                await page.pause();
              }
        
            
        });
    }
});
