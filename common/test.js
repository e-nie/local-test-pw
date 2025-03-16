import {test as base, expect} from '@playwright/test'
import LoginPage from '../elements/login'
import NavbarPage from '../elements/navbar'
import ProfilePage from '../pages/profile'

//‼️!!!this is a fixture!!!

const test = base.extend({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  },
  navbarPage: async ({page}, use) => {
    await use(new NavbarPage(page))
  },
  profilePage: async ({page}, use) => {
    await use(new ProfilePage(page))
  },
})

export {test, expect}
