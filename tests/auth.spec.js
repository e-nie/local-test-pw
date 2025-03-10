import {test, expect} from '../common/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({page, loginPage}) => {
    await loginPage.input.email.fill(process.env.EMAIL)
    await loginPage.input.password.fill(process.env.PASSWORD)
    await loginPage.button.submit.click()
    // await expect(await page.getByRole('img', { name: 'user' })).toBeVisible();
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with non-existing credentials', async ({loginPage}) => {
    await loginPage.input.email.fill('invalid@example.com')
    await loginPage.input.password.fill('invalid')
    await loginPage.button.submit.click()

    await expect(loginPage.alertToast).toBeVisible()
    await expect(loginPage.alertToast).toHaveText('User login. Fail')
  })
})
