import { chromium } from "@playwright/test";
import LoginPage from './pages/LoginPage'
import path from "path";

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demo-bank.vercel.app/');

    const loginPage = new LoginPage(page);
    //TODO: move to .env
    await loginPage.login('test1234', 'test1234');
    await loginPage.assertLoginSuccessful();

    // Log the path so you know exactly where the file is saved
    const storagePath = path.resolve(__dirname, 'storageState.json');
    console.log(`Saving storageState to: ${storagePath}`);

    await context.storageState({ path: storagePath });

    await browser.close();
}

export default globalSetup;