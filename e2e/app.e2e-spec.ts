import { PeopleListNgrxPage } from './app.po';

describe('people-list-ngrx App', () => {
  let page: PeopleListNgrxPage;

  beforeEach(() => {
    page = new PeopleListNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
