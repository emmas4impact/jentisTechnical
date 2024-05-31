import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactListPageLocators } from './locators/ContactListPageLocators';
import {faker} from '@faker-js/faker'

export class ContactListPage extends BasePage {
    readonly locators: ContactListPageLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new ContactListPageLocators(page);
    }
    
  

    async createContact(contactData: ContactData) {
        
        await this.page.click('#add-contact');
        await this.fill(this.locators.firstNameInput, contactData.firstName);
        await this.fill(this.locators.lastNameInput, contactData.lastName);
        await this.fill(this.locators.emailInput, contactData.email);
        await this.fill(this.locators.birthdateInput, contactData.birthdate);
        await this.fill(this.locators.phoneNumberInput, contactData.phoneNumber);
        await this.fill(this.locators.streetAddressInput,  contactData.streetAddress);
        await this.fill(this.locators.streetAddress2Input,  contactData.streetAddress2);
        await this.fill(this.locators.cityInput,  contactData.city);
        await this.fill(this.locators.stateProvinceInput,  contactData.stateProvince);
        await this.fill(this.locators.postCodeInput,  contactData.postCode);
        await this.fill(this.locators.country,  contactData.country );
       // await this.page.waitForTimeout(500);
        //await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    async contactList(){
       this.page.locator('td:nth-child(3)').textContent
    }

   async logout(){
    await this.page.getByRole('button', { name: 'Logout' }).click();
   }

   async handleConfirmationDialog(expectedMessage?: string) {
    this.page.on('dialog', async (dialog) => {
     
      if (expectedMessage) {
        expect(dialog.message()).toBe(expectedMessage);
      }

      await dialog.accept();
    });
  }
  async deleteContact() {
    this.page.click('#delete');
  }
    
    async getContactListText(): Promise<string> {
        const allNames = await this.page.locator('table tr td').allTextContents();
        return allNames.join('\n'); 
    }
}
export interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: string;
    phoneNumber: string;
    streetAddress: string;
    streetAddress2: string; 
    city: string;
    stateProvince: string;
    postCode: string;
    country: string;
  }