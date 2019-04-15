import faker from 'faker';
import { kebab } from 'change-case';
import { TisoKey, mockIsoKey } from '../../../data/hardcoded/languages/schema';
import { Ticon, mockIcon } from '../../../data/hardcoded/icons/schema';

/**
 * TODO: Description.
 */
export interface Tresource {
  title: string;
  id: string;
  click: string;
}

export const mockResource = () => {
  const title = faker.commerce.productName();

  return {
    title,
    id: kebab(title),
    click: faker.internet.url(),
  };
};

/**
 * TODO: Description.
 */
export interface Tquestion {
  title: string;
  id: string;
}

export const mockQuestion = () => {
  const title = faker.commerce.productName();

  return {
    title,
    id: kebab(title),
  };
};

/**
 * TODO: Description.
 */
export type TonStoryTemplatePress = (id: string, title: string) => void;

export interface Tprops {
  isoKey: TisoKey;
  icon: Ticon;
  onStoryTemplatePress: TonStoryTemplatePress;
  questions: Tquestion[];
  resources: Tresource[];
}

export const mockProps = (): Tprops => ({
  isoKey: mockIsoKey(),
  icon: mockIcon(),
  onStoryTemplatePress: (id, title) => console.log(id, title),
  questions: [1, 2, 3, 4, 5, 6].map(mockQuestion),
  resources: [1, 2, 3, 4, 5, 6].map(mockResource),
});

/**
 * TODO: Description.
 */
export interface Tstate {
  modalId: string | null;
}
