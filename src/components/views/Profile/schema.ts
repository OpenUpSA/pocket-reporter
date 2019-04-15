import faker from 'faker';
import { isoKeys, TisoKey } from '../../../data/hardcoded/languages/schema';

/**
 *
 */
export type TchangeCallback = (isoKey: string) => void | null;

/**
 *
 */
export type TisoKey = string;

/**
 *
 */
export interface Tprops {
  isoKey: TisoKey;
  changeCallback: TchangeCallback;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockProps: Tprops = {
  isoKey: faker.random.arrayElement(isoKeys) as TisoKey,
  changeCallback: (): void => console.log('Clicked'),
};

export default mockProps;
