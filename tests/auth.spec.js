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

    test('Sign in with non-existing credentials', async ({ page }) => {
        await page.goto('https://coding.pasv.us/user/login');

        await page.locator('#normal_login_email').fill('vl1vl2@yahoo.com'); //invalid email
        await page.locator('#normal_login_password').fill('57ThTRTV99qf!5L');
        await page.locator('button[type="submit"]').click();

        const alertToast = page.getByRole('alert')
        await expect(alertToast).toBeVisible();
        await expect(alertToast).toHaveText('User login. Fail');
    })
});
