import {test, expect} from '../common/test'

test.describe('Profile', () => {
  test.beforeEach(async ({loginPage, page}) => {
    await page.route(`${process.env.API_BASE_URL}/user/auth`, async route => {
      const response = await route.fetch()
      const json = await response.json()
      json.payload.emailConfirmation.confirmed = true
      json.payload.name = 'Evchen1 Evchen2' // can wait for this element instead of 'networkidle' below
      json.payload.firstName = 'Evchen1'
      json.payload.lastName = 'Evchen2'

      await route.fulfill({response, json})
    })

    await loginPage.open()
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)
  })
  test.only('Email confirmation is not visible', async ({page, profilePage}) => {
    // await profilePage.alertMsg.waitFor({state: 'visible', timeout: 10000})
    await page.waitForLoadState('networkidle') // wait for the page to load
    await expect(profilePage.alertMsg).not.toBeVisible()
  })

  test.afterEach(async ({page}) => {
    await page.unrouteAll({behavior: 'ignoreErrors'})
  })
})
