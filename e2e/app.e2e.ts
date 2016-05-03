import { Ng2Md5Page } from './app.po';

describe('ng2-md5 App', function() {
  let page: Ng2Md5Page;

  beforeEach(() => {
    page = new Ng2Md5Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-md5 Works!');
  });
});
