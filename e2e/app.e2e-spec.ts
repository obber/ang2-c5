import { Ang2C5Page } from './app.po';

describe('ang2-c5 App', function() {
  let page: Ang2C5Page;

  beforeEach(() => {
    page = new Ang2C5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
