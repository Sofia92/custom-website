import { CustomWebsitePage } from './app.po';

describe('custom-website App', () => {
  let page: CustomWebsitePage;

  beforeEach(() => {
    page = new CustomWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
