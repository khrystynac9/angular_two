import { DogPage } from './app.po';

describe('dog App', () => {
  let page: DogPage;

  beforeEach(() => {
    page = new DogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
