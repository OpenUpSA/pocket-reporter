/* eslint-disable no-console  */

import React from 'react';

/**
 * Imports everything needed to execute this specific test.
 */
import createPagesArray from '../index';
import { mockResponse } from '../schema';

/**
 * Execute test.
 */
const result = createPagesArray(mockResponse());
// console.log(result);

/**
 * Render and perform syntax highlighting on the output of the test.
 */
const Default = (): JSX.Element => (
  <pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>
);

export default Default;
