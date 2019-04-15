/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';

/**
 * TODO: Description
 */
export interface TlanguageResource {
  title: string;
  body: string;
}
const mockLanguageResource = () => ({
  title: faker.commerce.productName(),
  body: faker.lorem.paragraphs(8),
});

/**
 * TODO: Description:
 */
export type Tlanguages = {
  afr: TlanguageResource | null;
  spa: TlanguageResource | null;
  xho: TlanguageResource | null;
  nso: TlanguageResource | null;
  por: TlanguageResource | null;
  sot: TlanguageResource | null;
  tsn: TlanguageResource | null;
  zul: TlanguageResource | null;
};

/**
 * TODO: Description.
 */
export type Tresource = TlanguageResource & Tlanguages;
export const mockResource = () => ({
  ...mockLanguageResource(),
  afr: faker.random.boolean() ? mockLanguageResource() : null,
  spa: faker.random.boolean() ? mockLanguageResource() : null,
  xho: faker.random.boolean() ? mockLanguageResource() : null,
  nso: faker.random.boolean() ? mockLanguageResource() : null,
  por: faker.random.boolean() ? mockLanguageResource() : null,
  sot: faker.random.boolean() ? mockLanguageResource() : null,
  tsn: faker.random.boolean() ? mockLanguageResource() : null,
  zul: faker.random.boolean() ? mockLanguageResource() : null,
});
