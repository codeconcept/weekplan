import { WeekplanPage } from './app.po';

describe('weekplan App', function() {
  let page: WeekplanPage;

  beforeEach(() => {
    page = new WeekplanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
