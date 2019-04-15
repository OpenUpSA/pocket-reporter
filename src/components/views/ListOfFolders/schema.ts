import faker from 'faker';
import { icons, Ticon } from '../../../data/hardcoded/icons/schema';
import { isoKeys, TisoKey } from '../../../data/hardcoded/languages/schema';

export interface Tfolder {
  title: string;
  icon: Ticon;
}

export interface Tprops {
  folders: Tfolder[];
  isoKey: TisoKey;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockFolders = (): string => faker.commerce.productName();

const mockProps: Tprops = {
  isoKey: faker.random.arrayElement(isoKeys) as TisoKey,
  folders: [1, 2, 3, 4, 5, 6, 7, 8].map(
    (): Tfolder => ({
      title: faker.commerce.department(),
      icon: faker.random.arrayElement(icons),
    }),
  ),
};

export { mockFolders };
export default mockProps;
