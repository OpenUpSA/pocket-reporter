/* eslint-disable no-console  */

import React from 'react';

/**
 * Imports tests themselves.
 */
import reducer, { setLanguage } from '../index';
import { mockInfo } from '../../../schema';

/**
 * Execute test.
 */
const result = reducer(mockInfo(), setLanguage('nso'));
// console.log('set language', result);

/**
 * Render and perform syntax highlighting on the output of the test.
 */
const Test1 = (): JSX.Element => (
  <pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>
);

export default Test1;
