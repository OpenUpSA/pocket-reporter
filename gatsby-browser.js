/* eslint-disable import/prefer-default-export */

/**
 * Adds all polyfills requierd for Internet Explorer 10 support.
 */
import 'core-js/fn/object/assign';
import 'core-js/fn/array/find';
import 'core-js/fn/promise';
import 'core-js/fn/weak-set';
import 'core-js/fn/weak-map';
import 'core-js/fn/set';
import 'core-js/fn/map';

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
const store = createStore(true);
const value = { navigate, Link };

/**
 * Adds both wrappers to root of webapp.
 */
export const wrapRootElement = ({ element }) =>
  createElement(Redux, { store }, createElement(Gatsby, { value }, element));
