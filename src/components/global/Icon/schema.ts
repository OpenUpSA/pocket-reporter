/* eslint-disable no-console */

import faker from 'faker';
import { icons, Ticon } from '../../../data/hardcoded/icons/schema';

export interface Tprops {
  type: Ticon;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockType = (): Ticon => faker.random.arrayElement(icons) as Ticon;

const mock: Tprops = {
  type: mockType(),
};

export { mockType };
export default mock;
