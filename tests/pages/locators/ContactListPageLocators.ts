import { Locator, Page } from '@playwright/test';

export class ContactListPageLocators {
    readonly contactList: Locator; 
    readonly createContactButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly birthdateInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly streetAddressInput: Locator;
    readonly streetAddress2Input: Locator;
    readonly cityInput: Locator;
    readonly stateProvinceInput: Locator;  
    readonly postCodeInput: Locator;
    readonly country: Locator;      
    readonly saveButton: Locator;
    readonly firstContactItem: Locator;     
    readonly deleteButton: Locator;        
    readonly editButton: Locator;         
    readonly backButton: Locator; 
    readonly logoutButton: Locator;  
    readonly cancelButton: Locator;    
    readonly contactListTable: Locator;

    constructor(private page: Page) {
        this.contactList = page.locator('td:nth-child(3)');
        this.createContactButton = page.locator('#add-contact');
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.birthdateInput = page.locator('#birthdate'); 
        this.phoneNumberInput = page.locator('#phone');
        this.streetAddressInput = page.locator('#street1');
        this.streetAddress2Input = page.locator('#street2'); 
        this.cityInput = page.locator('#city');
        this.stateProvinceInput = page.locator('#stateProvince'); 
        this.postCodeInput = page.locator('#postalCode');
        this.country = page.locator('#country'); 
        this.saveButton =  page.getByRole('button', { name: 'Submit' });
        this.firstContactItem = page.locator('.contactTableBodyRow').first(); 
        this.deleteButton = page.locator('#delete');
        this.editButton = page.locator('#edit-contact');
        this.backButton = page.locator('#return'); 
        this.logoutButton = page.locator('#logout');
        this.cancelButton = page.locator('#cancel');
        this.contactListTable=page.locator('#myTable');
        
    }
}
