import { SharingMePage } from './app.po';

describe('sharing-me App', () => {
  let page: SharingMePage;

  beforeEach(() => {
    page = new SharingMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
