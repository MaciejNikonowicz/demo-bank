import { test } from '../fixtures/fixtures';
import HomePage from '../pages/HomePage';

test.describe('Homepage Actions', () => {
    //TODO: implement context.storageState
    test('should check account details on homepage', async ({ page, loginPage}) => {
        await loginPage.navigate('/');
        await loginPage.login('test1234', 'test1234');
        await loginPage.assertLoginSuccessful();

        const homePage = new HomePage(page);
        await homePage.expandDetailsSection();
        await homePage.assertAccountDetails(500, 5000, 'Jan Demobankowy');
    });
});