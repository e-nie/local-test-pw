import {test, expect} from '../common/test'

test.describe('Common', () => {
  test.beforeEach(async ({loginPage}) => {
    await loginPage.open()
    await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD)
  })

  test('Navigation', async ({page, navbarPage}) => {
    await navbarPage.navbar.courses.click()
    await expect(page).toHaveURL('/course')
    await expect(page.getByText('Курсы программирования и тестирования')).toBeVisible()

    await navbarPage.navbar.tasks.click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await navbarPage.navbar.interviews.click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await navbarPage.navbar.diary.click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(page.getByText('Daily reports')).toBeVisible()

    await navbarPage.navbar.groups.click()
    await expect(page).toHaveURL('/group')
    await expect(page.getByText('Groups').first()).toBeVisible()
  })
})
