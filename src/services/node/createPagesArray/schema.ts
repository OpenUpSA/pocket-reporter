import faker from 'faker';
import { Overwrite } from 'utility-types';
import { Tfolder, mockFolder } from '../../../data/saved/folders/schema';
import { TstoryTemplate, mockStoryTemplate } from '../../../data/saved/questions/schema';
import { Tresource, mockResource } from '../../../data/saved/resources/schema';

/**
 * TODO: Description.
 */
export interface TnestedStoryTemplate {
  content: TstoryTemplate | null;
}

export const mockNestedStoryTemplate = (): TnestedStoryTemplate => ({
  content: faker.random.boolean() ? mockStoryTemplate() : null,
});

/**
 * TODO: Description.
 */
export interface TnestedResouce {
  content: Tresource | null;
}

export const mockNestedResource = (): TnestedResouce => ({
  content: faker.random.boolean() ? mockResource() : null,
});

/**
 * TODO: Description.
 */
export interface TnestedContent {
  questions: TnestedStoryTemplate[];
  resources: TnestedResouce[];
}

const mockNestedContent = (): TnestedContent => ({
  questions: [1, 2, 3, 4, 5].map(mockNestedStoryTemplate),
  resources: [1, 2, 3, 4, 5].map(mockNestedResource),
});

/**
 * TODO: Description.
 */
export interface TnestedFolder {
  node: Overwrite<Tfolder, TnestedContent>;
}

const mockNestedFolder = (): TnestedFolder => ({
  node: {
    ...mockFolder(),
    ...mockNestedContent(),
  },
});

/**
 * TODO: Description.
 */
export interface Tresponse {
  data: {
    allFoldersJson: {
      edges: TnestedFolder[];
    };
  };
}

export const mockResponse = (): Tresponse => ({
  data: {
    allFoldersJson: {
      edges: [1, 2, 3, 4, 5].map(mockNestedFolder),
    },
  },
});

/**
 * TODO: Description.
 */
export interface TresultItem {
  path: string;
  component: string;
  context: {
    [key: string]: any;
  };
}

/**
 * TODO: Description.
 */
export type Tresult = TresultItem[];
