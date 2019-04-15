/* eslint-disable no-console */

import faker from 'faker';

export interface Tprops {
  children: string;
  component?: any;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockChildren = (): string => faker.commerce.productName();
const mockComponent = (): string => 'h1';

const mock: Tprops = {
  children: mockChildren(),
  component: mockComponent(),
};

export { mockChildren, mockComponent };
export default mock;
