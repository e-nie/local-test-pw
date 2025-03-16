// Page Element Model - ‼️we add to this page any methods or selectors that are common to all pages  - PEM

export class Page {
  constructor(page) {
    this.page = page
    this.alertToast = page.getByRole('alert') // My selector option
    // this.toast = page.locator('.ant-notification-notice-message')// Dima's selector option
    this.alertMsg = page.locator('.ant-alert-message')
  }
}
