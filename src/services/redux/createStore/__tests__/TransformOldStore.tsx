/* eslint-disable no-console  */

import React from 'react';

/**
 * Imports everything needed to execute this specific test.
 */
import { mockOldStore } from '../../schema';
import transformOldStore from '../transformOldStore';

/**
 * Execute test.
 */
// console.log(mockOldStore());
const result = transformOldStore(mockOldStore());

/**
 * Render and perform syntax highlighting on the output of the test.
 */
const Test2 = (): JSX.Element => (
  <pre>
    <code>{JSON.stringify(result, null, 2)}</code>
  </pre>
);

export default Test2;
