/* eslint-disable import/prefer-default-export */


import { createElement } from 'react';
import { Provider } from 'react-redux';
import { navigate } from 'gatsby';

// eslint-disable-next-line import/first
import store from './src/redux/store';


export const wrapRootElement = ({ element }) => (
  createElement(Provider, { store }, element)
);


export const onInitialClientRender = () => {
  const { info } = store.getState();
  const { language } = info;

  if (!language) {
    return navigate('/start/index.html');
  }

  return null;
};
