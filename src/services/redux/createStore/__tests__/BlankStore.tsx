/* eslint-disable no-console  */

import React from 'react';

/**
 * Imports everything needed to execute this specific test.
 */
import createStore from '../index';

/**
 * Execute test.
 */
const result = createStore().getState();
// console.log(result);

/**
 * Render and perform syntax highlighting on the output of the test.
 */
const Test1 = (): JSX.Element => (
  <pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>
);

export default Test1;
