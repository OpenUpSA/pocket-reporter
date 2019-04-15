/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';

/**
 * TODO: Description.
 */
export interface TquestionObject {
  question: string;
  description: string | null;
}
const mockQuestionObject = (): TquestionObject => ({
  question: faker.hacker.phrase(),
  description: faker.random.boolean() ? faker.lorem.paragraph() : null,
});

/**
 * TODO: Descripton.
 */
export type TlanguageStory = {
  title: string;
  questions: TquestionObject[];
};
const mockLanguageStory = (): TlanguageStory => ({
  title: faker.commerce.productName(),
  questions: [1, 2, 3, 4, 5].map(mockQuestionObject),
});

/**
 * TODO: Description
 */
export type Tlanguages = {
  afr?: TlanguageStory | null;
  spa?: TlanguageStory | null;
  xho?: TlanguageStory | null;
  nso?: TlanguageStory | null;
  por?: TlanguageStory | null;
  sot?: TlanguageStory | null;
  tsn?: TlanguageStory | null;
  zul?: TlanguageStory | null;
};

/**
 * TODO: Description.
 */
export type TstoryTemplate = TlanguageStory & Tlanguages;
export const mockStoryTemplate = (): TstoryTemplate => ({
  ...mockLanguageStory(),
  afr: faker.random.boolean() ? mockLanguageStory() : null,
  spa: faker.random.boolean() ? mockLanguageStory() : null,
  xho: faker.random.boolean() ? mockLanguageStory() : null,
  nso: faker.random.boolean() ? mockLanguageStory() : null,
  por: faker.random.boolean() ? mockLanguageStory() : null,
  sot: faker.random.boolean() ? mockLanguageStory() : null,
  tsn: faker.random.boolean() ? mockLanguageStory() : null,
  zul: faker.random.boolean() ? mockLanguageStory() : null,
});
