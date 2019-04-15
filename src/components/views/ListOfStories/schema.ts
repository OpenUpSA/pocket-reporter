import faker from 'faker';
import { isoKeys, TisoKey } from '../../../data/hardcoded/languages/schema';

export interface Tstory {
  title: string;
  type: string;
  created: number;
  progress: number;
}

export interface Tprops {
  stories: Tstory[];
  isoKey: TisoKey;
}

const mockStories = (): Tstory[] =>
  [1, 2, 3, 4, 5, 6, 7, 8].map(
    (): Tstory => ({
      title: faker.commerce.productName(),
      type: faker.commerce.department(),
      created: faker.date.recent(90).getTime(),
      progress: faker.random.number({ min: 0, max: 100 }),
    }),
  );

const mockIsoKey = (): TisoKey => faker.random.arrayElement(isoKeys) as TisoKey;

const mockProps: Tprops = {
  isoKey: mockIsoKey(),
  stories: mockStories(),
};

export { mockStories };
export default mockProps;
