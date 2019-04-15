/* eslint-disable import/prefer-default-export */

/**
 * Import everything needed to bootstrap a global Redux store.
 */
import { createElement } from 'react';
import { navigate, Link } from 'gatsby';
import { Provider as Redux } from 'react-redux';
import { Provider as Gatsby } from './src/services/utilities/gatsbyContext';

import createStore from './src/services/redux/createStore';

/**
 * Creates dynamic values to pass to both Redux store and Gatsby wrapper.
 */
const store = createStore();
const value = { navigate, Link };

/**
 * Adds both wrappers to root of webapp.
 */
export const wrapRootElement = ({ element }) =>
  createElement(Redux, { store }, createElement(Gatsby, { value }, element));
