import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async navigateToSignupPage() {
        await this.click(this.page.locator('#signup')); 
    }
    async addContact() {
        await this.click(this.page.locator("//button[@id='submit']")); 
    }
    async logout() {
        await this.click(this.page.locator("//button[@id='submit']")); 
    }
}