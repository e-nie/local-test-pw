import LoginPage from './login'
import {Page} from './page'

export default class CoursesPage extends Page {
  constructor(page) {
    super()
    this.page = page
    this.courses = page.getByTestId('topmenu-Курсы')
  }

  async open(email, password) {
    const loginPage = new LoginPage(this.page)
    await loginPage.open()
    await loginPage.logIn(email, password)
    await this.courses.click()
  }
}
