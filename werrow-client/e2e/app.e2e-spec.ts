import { WerrowPage } from './app.po';

describe('werrow App', () => {
  let page: WerrowPage;

  beforeEach(() => {
    page = new WerrowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
