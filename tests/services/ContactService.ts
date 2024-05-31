import { ContactListPage } from '../pages/ContactListPage';
import { test as baseTest } from '@playwright/test';
import { EditContactPage } from '../pages/EditContactPage';

import { ContactDetailsPage } from '../pages/ContactDetailsPage';

export const test = baseTest.extend<{
  contactListPage: ContactListPage;
  contactDetailsPage: ContactDetailsPage,
  editContactPage: EditContactPage
}>({
  contactListPage: async ({ page, baseURL }, use) => {
    const contactListPage = new ContactListPage(page);
    await page.goto(`${baseURL}/contactList`);
    await use(contactListPage);
  },
  contactDetailsPage: async ({ page, baseURL }, use) => {
    const contactDetailsPage = new ContactDetailsPage(page);
    await use(contactDetailsPage);
  },
  editContactPage: async ({ page, baseURL }, use) => {
    const editContactPage = new EditContactPage(page);
    await use(editContactPage);
  },
});
