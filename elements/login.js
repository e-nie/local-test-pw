import {Page} from '../pages/page'

export default class LoginPage extends Page {
  constructor(page) {
    super(page)

    // как записывать селекторы:
    //1
    // this.inputEmail = page.locator('#normal_login_email')
    // this.inputPassword = page.locator('#normal_login_password')
    // this.buttonSubmit = page.locator('button[type="submit"]')

    //2
    this.input = {
      email: page.locator('#normal_login_email'),
      password: page.locator('#normal_login_password'),
    }
    this.button = {
      submit: page.locator('button[type="submit"]'),
    }
  }

  async open() {
    return this.page.goto('/user/login')
  }

  async logIn(email, password) {
    await this.input.email.fill(email)
    await this.input.password.fill(password)
    await this.button.submit.click()
  }
}
