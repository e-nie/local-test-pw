//Page Element Model

export default class NavbarPage {
  constructor(page) {
    this.page = page

    this.navbar = {
      courses: page.getByTestId('topmenu-Курсы'),
      tasks: page.getByTestId('topmenu-Задачи'),
      interviews: page.getByTestId('topmenu-Интервью'),
      diary: page.getByTestId('topmenu-Дневник'),
      groups: page.getByTestId('topmenu-Группы'),
    }
  }
}
