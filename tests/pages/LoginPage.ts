import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPageLocators } from './locators/LoginPageLocators';
import { faker } from '@faker-js/faker';

export class LoginPage extends BasePage {
    readonly locators: LoginPageLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new LoginPageLocators(page);
    }

    async login(email = faker.internet.email(), password = faker.internet.password()) { 
        await this.fill(this.locators.emailInput, email);
        await this.fill(this.locators.passwordInput, password);
        await this.click(this.locators.loginButton);
    }
}