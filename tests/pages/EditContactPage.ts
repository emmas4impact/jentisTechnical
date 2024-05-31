import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactListPageLocators } from './locators/ContactListPageLocators';

export class EditContactPage extends BasePage {
    readonly locators: ContactListPageLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new ContactListPageLocators(page);
    }

    async editContact(updatedContact: any) {
        await this.fill(this.locators.firstNameInput, updatedContact.firstName);
        await this.fill(this.locators.lastNameInput, updatedContact.lastName);
        await this.fill(this.locators.emailInput, updatedContact.email);
        
        await this.click(this.locators.saveButton);
    }
}
