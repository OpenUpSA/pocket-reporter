/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';
import { Ticon, mockIcon } from '../../hardcoded/icons/schema';

/**
 * TODO: Description
 */
export interface Tfolder {
  title: string;
  icon: Ticon;
  translations: {
    afr: string | '';
    spa: string | '';
    xho: string | '';
    nso: string | '';
    por: string | '';
    sot: string | '';
    tsn: string | '';
    zul: string | '';
  };
  questions: { content: string | '' }[];
  resources: { content: string | '' }[];
}

export const mockFolder = (): Tfolder => ({
  title: faker.commerce.department(),
  icon: mockIcon(),
  translations: {
    afr: faker.random.boolean() ? faker.commerce.department() : '',
    spa: faker.random.boolean() ? faker.commerce.department() : '',
    xho: faker.random.boolean() ? faker.commerce.department() : '',
    nso: faker.random.boolean() ? faker.commerce.department() : '',
    por: faker.random.boolean() ? faker.commerce.department() : '',
    sot: faker.random.boolean() ? faker.commerce.department() : '',
    tsn: faker.random.boolean() ? faker.commerce.department() : '',
    zul: faker.random.boolean() ? faker.commerce.department() : '',
  },
  questions: [1, 2, 3].map(() => ({
    content: faker.random.boolean() ? faker.commerce.productName() : '',
  })),
  resources: [1, 2, 3].map(() => ({
    content: faker.random.boolean() ? faker.commerce.productName() : '',
  })),
});
