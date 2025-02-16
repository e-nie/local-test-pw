import {test, expect} from '@playwright/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({page}) => {
    await page.goto(`/user/login`)
  })

  test('Sign in with existing credentials', async ({page}) => {
    await page.locator('#normal_login_email').fill(process.env.EMAIL)
    await page.locator('#normal_login_password').fill(process.env.PASSWORD)
    await page.locator('button[type="submit"]').click()
    // await expect(await page.getByRole('img', { name: 'user' })).toBeVisible();
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with non-existing credentials', async ({page}) => {
    await page.locator('#normal_login_email').fill('vl1vl2@yahoo.com') //invalid email
    await page.locator('#normal_login_password').fill('57ThTRTV99qf!5L')
    await page.locator('button[type="submit"]').click()

    const alertToast = page.getByRole('alert')
    await expect(alertToast).toBeVisible()
    await expect(alertToast).toHaveText('User login. Fail')
  })
})
