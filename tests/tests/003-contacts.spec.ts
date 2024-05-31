import { test } from "../services/ContactService";
import { expect } from "@playwright/test";
import contactTestCases from "../test-cases/contacts.json";
import { faker } from "@faker-js/faker";
import { ContactData } from "../pages/ContactListPage";

import { BasePage } from "../pages/BasePage";

test.describe("Contact Functionality (Regression)", () => {
  test.use({ storageState: "storageState.json" });

  for (const testCase of contactTestCases.filter((tc) => tc.isRegression)) {
    test(
      testCase.description,
      async ({
        page,
        baseURL,
        contactListPage,
        contactDetailsPage,
        editContactPage,
      }) => {
        const contactData: ContactData = {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          birthdate: faker.date.birthdate().toISOString().split("T")[0],
          email: faker.internet.email(),
          phoneNumber: faker.phone
            .number()
            .replace(/[^0-9]/g, "")
            .slice(0, 9),
          streetAddress: faker.location.streetAddress(),
          streetAddress2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          stateProvince: faker.location.state(),
          postCode: faker.location.zipCode(),
          country: faker.location.country(),
        };
        const basePage = new BasePage(page);

        if (testCase.id === "UI-TC06") {
          
          await contactListPage.createContact(contactData);
          await basePage.addContact();
          await page.waitForURL(`${baseURL}/contactList`);
          const fullName = contactData.firstName + " " + contactData.lastName;
          const contactListText = await contactListPage.getContactListText();
          expect(contactListText).toContain(fullName);
          
        } else if (testCase.id === "UI-TC09") {
          const tableRows = await page.locator("table tr").all(); 
          const firstRow = tableRows[1];
          await firstRow.click();
          await expect(
            contactDetailsPage.locators.firstNameInput
          ).toBeVisible();
          await expect(contactDetailsPage.locators.emailInput).toBeVisible();
        } else if (testCase.id === "UI-TC10") {
          await page.click("table tr:nth-child(3)");
          await contactDetailsPage.clickEditButton();
          await page.waitForURL(`${baseURL}/editContact`);

          const updatedContactData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
          };

          await editContactPage.editContact(updatedContactData);
          await expect(contactDetailsPage.locators.firstNameInput).toHaveText(
            updatedContactData.firstName
          );
        } else if (testCase.id === "UI-TC13") {
          await page.click("table tr:nth-child(3)");
          await page.waitForURL("/contactDetails");
          await contactDetailsPage.clickReturnButton();
          await expect(contactListPage.locators.contactListTable).toBeVisible();
        } else if (testCase.id === "UI-TC15") {
          
          const contactRows = await contactListPage.locators.contactListTable.locator('tr').all(); 

          if (contactRows.length > 0) {
            const firstContactRow = contactRows[1]; 
            await firstContactRow.click(); 
            await page.waitForURL(`${baseURL}/contactDetails`); 
            await contactListPage.deleteContact(); 
         
            await contactListPage.handleConfirmationDialog();
            await page.waitForURL(`${baseURL}/contactList`); 
            await expect(page).toHaveURL(`${baseURL}/contactList`);
          } else {
            console.log('No contacts found in the list. Skipping delete test.'); 
            
          }
        }else if(testCase.id==='UI-TC16'){
          contactListPage.logout();
          await expect(page).toHaveURL(`${baseURL}`);
        }
       
      }
    );
  }
});
