/* eslint-disable import/prefer-default-export */


import { createElement } from 'react';
import { Provider } from 'react-redux';
import { navigate } from 'gatsby';

import localStorageData from './localstorage-fake-data.json';

localStorage.setItem('PocketReporter', JSON.stringify(localStorageData));

// eslint-disable-next-line import/first
import store from './src/redux/store';


export const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


export const onInitialClientRender = () => {
  const { user } = store.getState();
  const { language } = user;

  if (!language) {
    return navigate('/start/index.html');
  }

  return null;
};
