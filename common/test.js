import {test as base, expect} from '@playwright/test'
import LoginPage from '../pages/login'

//this is a fixture
const test = base.extend({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
})

export {test, expect}
