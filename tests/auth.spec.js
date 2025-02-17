import {test, expect} from '../common/test'

test.describe('Authentication & Authorization', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({page, loginPage}) => {
    await loginPage.inputEmail.fill(process.env.EMAIL)
    await loginPage.inputPassword.fill(process.env.PASSWORD)
    await loginPage.buttonSubmit.click()
    // await expect(await page.getByRole('img', { name: 'user' })).toBeVisible();
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with non-existing credentials', async ({loginPage}) => {
    await loginPage.inputEmail.fill('invalid@example.com')
    await loginPage.inputPassword.fill('invalid')
    await loginPage.buttonSubmit.click()

    await expect(loginPage.alertToast).toBeVisible()
    await expect(loginPage.alertToast).toHaveText('User login. Fail')
  })
})
