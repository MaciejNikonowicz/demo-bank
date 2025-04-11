import { Locator, Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
    private usernameInput = 'input[data-testid="login-input"]';
    private passwordInput = 'input[data-testid="password-input"]';
    private loginButton = 'button[data-testid="login-button"]';

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async assertLoginSuccessful() {
        await expect(this.page.locator('text=Wyloguj')).toBeVisible();
    }
}