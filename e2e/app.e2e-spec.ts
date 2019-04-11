import { FroalaAngularPage } from './app.po';

describe('froala-angular App', function() {
  let page: FroalaAngularPage;

  beforeEach(() => {
    page = new FroalaAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
