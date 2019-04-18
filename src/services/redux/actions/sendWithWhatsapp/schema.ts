import faker from 'faker';
import { v4 as generateUniqueId } from 'uuid';

const idsArray = [1, 2, 3, 4, 5, 6, 7, 8].map(() => generateUniqueId());

/**
 * TODO: Add description.
 */
export type Tid = string;
export const mockId = (): Tid => faker.random.arrayElement(idsArray);

/**
 * TODO: Add description.
 */
export type Ttext = string;
export const mockText = (): Ttext => faker.hacker.phrase();
