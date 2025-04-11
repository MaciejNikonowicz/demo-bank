import { test } from '../fixtures/fixtures';

test.describe('Login to Demobank', () => {
    test('should login successfully', async ({ loginPage}) => {
        await loginPage.navigate('/');
        await loginPage.login('test1234', 'test1234');
        await loginPage.assertLoginSuccessful();
    });
});