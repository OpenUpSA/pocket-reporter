/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-console */

/**
 * Imports tooling required to build mock data
 */
import faker from 'faker';
import moment from 'moment';
import { v4 as generateUniqueId } from 'uuid';

/**
 * Import TypeScript static types.
 */
import { TisoKey, isoKeys } from '../../data/hardcoded/languages/schema';

/**
 * Create mock specific constants.
 */
const veryLongAgo = moment()
  .subtract(100, 'days')
  .toString();
const longAgo = moment()
  .subtract(50, 'days')
  .toString();
const someTimeAgo = moment()
  .subtract(20, 'days')
  .toString();
const recentAgo = moment()
  .subtract(5, 'days')
  .toString();

/**
 * The date and time (as an epoch timestamp) that the last recorded action was performed by a user.
 */
export type TlastAction = number;

export const mockLastAction = (): TlastAction => faker.date.between(longAgo, someTimeAgo).getTime();

/**
 * As single question string associated with an answer (in a created story).
 */
export type Tquestion = string;

export const mockQuestion = (): Tquestion => `${faker.hacker.phrase()}?`;

/**
 * A description string (usually as a single or more paragraphs) written in Markdown, associated
 * with a specific answer (in a created story).
 */
export type Tdescription = string;

export const mockDescription = (): Tdescription => faker.lorem.paragraphs(2);

/**
 * A single answer string in a specific answer object (that is usually included alongside other answer object as part of a created story).
 */
export type TsingleAnswer = string;

export const mockSingleAnswer = (): TsingleAnswer => faker.hacker.phrase();

/**
 * The amount of times (to the current date) that an answer entry was edited by a user.
 */
export type Tedits = number;
export const mockEdits = (): Tedits => faker.random.number({ min: 1, max: 6 });

/**
 * The date and time (as epoch timestamp) that the user first answered this questions.
 */
export type TfirstAnswered = number;

export const mockFirstAnswered = (): TfirstAnswered =>
  faker.date.between(longAgo, someTimeAgo).getTime();

/**
 * The date and time (as epoch timestamp) of the last time a user updated this specific answer.
 */
export type TanswerLastEdit = number;

export const mockAnswerLastEdit = (): TanswerLastEdit =>
  faker.date.between(someTimeAgo, recentAgo).getTime();

/**
 * The shape of a specific answer in the `stories` project-wide Redux module.
 */
export type TanswerObject = {
  question: Tquestion;
  description: Tdescription;
  answer: TsingleAnswer | null;
  edits: Tedits | null;
  firstAnswered: TfirstAnswered | null;
  lastEdit: TanswerLastEdit | null;
};

export const mockAnswerObject = (answered, edited): TanswerObject => ({
  question: mockQuestion(),
  description: mockDescription(),
  answer: answered ? mockSingleAnswer() : null,
  edits: edited ? mockEdits() : null,
  firstAnswered: answered ? mockFirstAnswered() : null,
  lastEdit: edited ? mockAnswerLastEdit() : null,
});

/**
 * The date and time (as epoch timestamp) that any answer inside a story has been updated by a user.
 */
export type TlastEditStory = number;

export const mockLastEditStory = (): TlastEditStory =>
  faker.date.between(someTimeAgo, recentAgo).getTime();

/**
 * The date and time (as epoch timestamp) that the user created this specific story.
 */
export type TstartedStory = number;

export const mockStartedStory = (): TstartedStory =>
  faker.date.between(longAgo, someTimeAgo).getTime();

/**
 * The shape of an object in the `stories` project-wide Redux module.
 */
export type Tstory = {
  lastEdit: TlastEditStory | null;
  started: TstartedStory;
  sent: number;
  answers: {
    [key: string]: TanswerObject;
  };
};

export const mockStory = (answered?: boolean, edited?: boolean): Tstory => ({
  lastEdit: edited ? mockLastEditStory() : null,
  started: mockStartedStory(),
  sent: faker.random.number(),
  answers: {
    [generateUniqueId()]: mockAnswerObject(
      !!answered && faker.random.boolean(),
      !!edited && faker.random.boolean(),
    ),
  },
});

/**
 * The date and time (as epoch timestamp) that the user updated, created or changed in the Redux store.
 */
export type TlastUserEdit = number;

export const mockLastUserEdit = (): TlastUserEdit => faker.date.recent(5).getTime();

/**
 * The date and time (as epoch timestamp) that the user created their first story.
 */
export type Tjoined = number;

export const mockJoined = (): TlastUserEdit => faker.date.between(veryLongAgo, longAgo).getTime();

/**
 * The current language selected by a user (formatted in accordance with the iSO 639-2 standard)
 */
export type Tlanguage = TisoKey;

export const mockLanguage = (): Tlanguage => faker.random.arrayElement(isoKeys) as TisoKey;

/**
 * The shape of the `info` module in the project-wide Redux store.
 */
export type Tinfo = {
  lastAction: TlastAction | null;
  joined: Tjoined | null;
  language: Tlanguage | null;
};

export const mockInfo = (): Tinfo => ({
  lastAction: mockLastAction(),
  joined: mockJoined(),
  language: mockLanguage(),
});

/**
 * The shape of the project-wide Redux store.
 */
export type Tstore = {
  info: Tinfo;
  stories: {
    [key: string]: Tstory;
  };
};

const addObject = result => ({
  ...result,
  [generateUniqueId()]: mockStory(),
});

export const mockStore = (): Tstore => ({
  info: mockInfo(),
  stories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(addObject, {}),
});

/**
 * TODO: Description.
 */
export type ToldLanguageKey = 'en-za' | 'af' | 'es' | 'xh' | 'nso' | 'pt' | 'st' | 'tn' | 'ZU';

export const mockOldLanguageKey = (): ToldLanguageKey =>
  faker.random.arrayElement(['en-za', 'af', 'es', 'xh', 'nso', 'pt', 'st', 'tn', 'ZU']);

/**
 * TODO: Description
 */
export interface ToldStoryItem {
  answers: { done: boolean; key: string; notes?: string | null }[];
  created_at: string;
  updated_at: string;
  topic: string;
  title: string;
  id: number;
}

export const mockOldStoryItem = () => ({
  created_at: '2019-04-13T19:48:34.818Z',
  updated_at: '2019-04-13T19:48:50.989Z',
  topic: faker.random.number({ min: 1, max: 4 }).toString(),
  title: faker.commerce.productName(),
  id: faker.random.number({ min: 1, max: 4 }),
  answers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => ({
    key: key.toString(),
    done: faker.random.boolean(),
    notes: faker.random.boolean() ? faker.hacker.phrase() : null,
  })),
});

/**
 * TODO: Description.
 */
export interface ToldStore {
  nextId: number;
  customTopics: string[];
  version: number;
  user: {};
  locale: ToldLanguageKey;
  stories: ToldStoryItem[];
}

export const mockOldStore = () => ({
  nextId: faker.random.number(),
  customTopics: [],
  version: faker.random.number(),
  user: {},
  locale: mockOldLanguageKey(),
  stories: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(mockOldStoryItem),
});
