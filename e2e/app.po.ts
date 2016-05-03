export class Ng2Md5Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-md5-app p')).getText();
  }
}
