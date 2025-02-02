import { test, expect } from '@playwright/test';

test.describe('Authentication & Authorization', () => {
    test('Sign in with existing credentials', async ({ page }) => {
        await page.goto('https://coding.pasv.us/user/login');

        await page.locator('#normal_login_email').fill('vl1vl@yahoo.com');
        await page.locator('#normal_login_password').fill('57ThTRTV99qf!5L');
        await page.locator('button[type="submit"]').click();
        // await expect(await page.getByRole('img', { name: 'user' })).toBeVisible();
        await expect(page.locator('.ant-avatar-square')).toBeVisible();
    });
});
