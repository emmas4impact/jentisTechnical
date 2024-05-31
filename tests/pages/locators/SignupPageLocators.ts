import { Locator, Page } from '@playwright/test';

export class SignupPageLocators {
  readonly firstNameInput: Locator; 
  readonly lastNameInput: Locator; 
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signupButton: Locator;
  readonly saveButton: Locator;
  readonly errorMessage: Locator;

  constructor(private page: Page) {
      this.firstNameInput = page.locator('#firstName');
      this.lastNameInput = page.locator('#lastName');
      this.emailInput = page.locator('#email');
      this.passwordInput = page.locator('#password');
      this.saveButton = page.locator("#submit")
      this.errorMessage = page.locator('#error');
  }
}
