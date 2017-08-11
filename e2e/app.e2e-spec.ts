import { AkibotUiPage } from './app.po';

describe('akibot-ui App', () => {
  let page: AkibotUiPage;

  beforeEach(() => {
    page = new AkibotUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
