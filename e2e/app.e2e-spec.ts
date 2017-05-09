import { AngularMultiTenantProtoPage } from './app.po';

describe('angular-multi-tenant-proto App', () => {
  let page: AngularMultiTenantProtoPage;

  beforeEach(() => {
    page = new AngularMultiTenantProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
