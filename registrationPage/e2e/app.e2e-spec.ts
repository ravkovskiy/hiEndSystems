import { RegistrationPagePage } from './app.po';

describe('registration-page App', () => {
  let page: RegistrationPagePage;

  beforeEach(() => {
    page = new RegistrationPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
