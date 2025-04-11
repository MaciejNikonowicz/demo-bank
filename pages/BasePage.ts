import { Page } from '@playwright/test';

export default class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async parseStringAmountToNumber(amountLocator: string): Promise<number> {
        const amountText = await this.page.locator(amountLocator).textContent();
        const numericValue = parseFloat(
            amountText
                ?.trim()
                .replace(/\s/g, '')
                .replace('PLN', '')
                .replace(',', '.') || '0'
        );
        return numericValue;
    }
}