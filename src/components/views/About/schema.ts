/* eslint-disable no-console */
import faker from 'faker';
import { TisoKey, isoKeys } from '../../../data/hardcoded/languages/schema';

/**
 *
 */
export interface Tpartner {
  link: string;
  logo: string;
  name: string;
}

/**
 *
 */
export interface Tcontributor {
  link: string;
  name: string;
}

/**
 *
 */
export type Ttagline = string;

/**
 *
 */
export type Tbody = string;

/**
 *
 */
export type isoKey = TisoKey;

/**
 * Props accepted by `<About />`
 */
export interface Tprops {
  tagline: Ttagline;
  body: Tbody;
  isoKey: TisoKey;
  partners: Tpartner[];
  contributors: Tcontributor[];
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockTagline = (): string => faker.commerce.productName();
const mockTbody = (): string => faker.lorem.paragraph();
const mockIsoKey = (): TisoKey => faker.random.arrayElement(isoKeys) as TisoKey;

const mockPartners = (): Tpartner[] =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
    (): Tpartner => ({
      link: faker.internet.url(),
      logo: faker.image.image(
        // @ts-ignore
        faker.random.number({ min: 300, max: 600 }),
        faker.random.number({ min: 300, max: 600 }),
      ),
      name: faker.company.companyName(),
    }),
  );

const mockContributors = (): Tcontributor[] =>
  [1, 2, 3, 4, 5, 6].map(
    (): Tcontributor => ({
      link: faker.internet.url(),
      name: faker.name.findName(),
    }),
  );

const mockProps: Tprops = {
  tagline: mockTagline(),
  body: mockTbody(),
  isoKey: mockIsoKey(),
  partners: mockPartners(),
  contributors: mockContributors(),
};

export { mockTagline, mockTbody, mockIsoKey, mockPartners, mockContributors };
export default mockProps;
