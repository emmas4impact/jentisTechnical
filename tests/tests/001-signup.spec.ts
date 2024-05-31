import { test, expect } from '@playwright/test';
import signupTestCases from '../test-cases/signup.json';
import {SignupPage} from "../pages/SignupPage"
import { BasePage } from '../pages/BasePage';



test.describe('Signup Functionality', () => {
  test.beforeEach(async ({ page , baseURL}) => {
    const basePage = new BasePage(page);
    await page.goto(`${baseURL}`); 
    await basePage.navigateToSignupPage();
  });

  for (const testCase of signupTestCases.filter(tc => tc.isRegression)) {
    test(testCase.description, async ({ page, context, baseURL}) => {
      const signupData = new SignupPage(page); 
      if (testCase.id === 'UI-TC01') {  
        await signupData.signup(); 
        await page.waitForURL(`${baseURL}/contactList`);

        await context.storageState({ path: 'storageState.json' })
        await expect(page).toHaveURL(`${baseURL}/contactList`); 
        await page.pause();
      } else { 
        await expect(signupData.locators.errorMessage).toBeVisible(); 
        
      }
    });
  }
});