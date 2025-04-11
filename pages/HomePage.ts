import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
    private accNumber = '#account_number';
    private frozenFundsAmount = 'label:has-text("blokady na koncie") + div';
    private creditLimitsAmount = 'label:has-text("limit kredytowy do wykorzystania") + div';
    private accOwnerName = '#owner';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Clicking on account number should expand account details section
     */
    async expandDetailsSection(): Promise<void> {
        await this.page.click(this.accNumber);
    }

    async assertAccountDetails(maxFrozenFundsLimit: number, maxCreditLimit: number, ownerName: string): Promise<void> {
        const frozenFunds = await this.parseStringAmountToNumber(this.frozenFundsAmount);
        expect(frozenFunds).toBeLessThan(maxFrozenFundsLimit);
        const creditLimits = await this.parseStringAmountToNumber(this.creditLimitsAmount);
        expect(creditLimits).toBeGreaterThan(maxCreditLimit);
        await expect(this.page.locator(this.accOwnerName)).toHaveText(ownerName);
    }
}