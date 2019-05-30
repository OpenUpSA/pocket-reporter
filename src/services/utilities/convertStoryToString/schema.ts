import faker from 'faker';
import { v4 as generateUniqueId } from 'uuid';
import { Tstory, mockStory } from '../../redux/schema';

/**
 * A single story (usually from the Redux store passed to `convertStoryToString`).
 */
export type TSingleStory = Tstory;
export const mockSingleStory = mockStory;

/**
 * An object of stories passed to the function. Once function runs it matches the value passed to `Tid` to a key in the `Tstories` object to find the story that should be converted to a string.
 */
export type Tstories = {
  [key: string]: TSingleStory;
};

export const mockStories = (): Tstories =>
  new Array(faker.random.number({ min: 1, max: 50 }))
    .fill(true)
    .reduce(result => ({ ...result, [generateUniqueId()]: mockStory() }), {});

/**
 * A unique string ID that gets matched with a specific story (in order to determine what story should be converted to a string)
 */
export type Tid = string;
export const mockId = (stories): Tid => faker.random.arrayElement(Object.keys(stories));
