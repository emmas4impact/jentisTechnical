import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { faker } from '@faker-js/faker';
import { SignupPageLocators } from './locators/SignupPageLocators'; 

export class SignupPage extends BasePage {
    readonly locators: SignupPageLocators;  

    constructor(page: Page) {
        super(page);
        this.locators = new SignupPageLocators(page); 
    }

    async signup() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        
       
        await this.fill(this.locators.firstNameInput, firstName); 
        await this.fill(this.locators.lastNameInput, lastName);
        await this.fill(this.locators.emailInput, email);
        await this.fill(this.locators.passwordInput, password);
        await this.click(this.locators.saveButton);

        return { firstName, lastName, email, password }; 
    }
}