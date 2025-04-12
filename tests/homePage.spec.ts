import { test } from '../fixtures/fixtures';
import HomePage from '../pages/HomePage';

test.describe('Homepage Actions', () => {
    //TODO: implement context.storageState
    test('should check account details on homepage', async ({ page }) => {    
        const homePage = new HomePage(page);
        await homePage.navigate('/pulpit.html');
        await homePage.expandDetailsSection();
        await homePage.assertAccountDetails(500, 5000, 'Jan Demobankowy');
    });
});