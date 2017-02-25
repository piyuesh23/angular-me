import { D8AngularPage } from './app.po';

describe('d8-angular App', function() {
  let page: D8AngularPage;

  beforeEach(() => {
    page = new D8AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
