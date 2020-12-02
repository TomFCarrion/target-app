import React from 'react';

import LoginPage from 'pages/LoginPage';
import testIds from 'constants/testIds';
import { configureStore, renderWithRedux } from 'utils/testHelpers';

describe('LoginPage', () => {
  let store: any;
  let wrapper: any;

  beforeAll(() => {
    store = configureStore({});
    wrapper = renderWithRedux(LoginPage, store);
  });

  it('Should render the login page', () => {
    expect(wrapper.queryByTestId(testIds.LOGIN_PAGE)).toBeTruthy();
  });
});