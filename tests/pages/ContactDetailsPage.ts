import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactListPageLocators } from './locators/ContactListPageLocators'; 

export class ContactDetailsPage extends BasePage {
    readonly locators: ContactListPageLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new ContactListPageLocators(page); 
    }

    async getContactDetails() {
        
        const firstName = await this.locators.firstNameInput.textContent();
        const lastName = await this.locators.lastNameInput.textContent();
        const email = await this.locators.emailInput.textContent();
        const birthdate = await this.locators.birthdateInput.textContent();
        const phoneNumber = await this.locators.phoneNumberInput.textContent();
        const streetAddress = await this.locators.streetAddressInput.textContent();
        const streetAddress2 = await this.locators.streetAddress2Input.textContent();
        const city = await this.locators.cityInput.textContent();
        const stateProvince = await this.locators.stateProvinceInput.textContent();
        const postCode = await this.locators.postCodeInput.textContent();
        const country = await this.locators.country.textContent();

        return {
         
            firstName,
            lastName,
            email,
            birthdate,
            phoneNumber,
            streetAddress,
            streetAddress2,
            city,
            stateProvince,
            postCode,
            country,
        };
    }

    async clickEditButton() {
        await this.click(this.locators.editButton);
    }

    async clickReturnButton() {
        await this.click(this.locators.backButton);
    }
    async clickContactDetails() {
        
        await this.click(this.locators.contactList);
    }

}
