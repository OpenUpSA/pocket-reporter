/* eslint-disable no-console */

import faker from 'faker';
import { icons, Ticon } from '../../../data/hardcoded/icons/schema';

/**
 * Determines whether card should appear as if stacked on top of other cards.
 */
export type Tstacked = boolean;

/**
 * Determines whether card should be grey. By default card is green, however resources use grey cards.
 */
export type Tresource = boolean;

/**
 * The title that will be displayed on the card.
 */
export type Ttitle = string;

/**
 * The icon that should be displayed. Only accepts pre-determined strings.
 */
export type TcardIcon = Ticon;

type callback = (string) => void | null;

/**
 * Passed to the ClickWrapper component wrapping the card. See ClickWrapper component for more information.
 */
export type TonClickEvent = string | callback;

/**
 * Props accepted by `<Card />`.
 */
export interface Tprops {
  stacked?: Tstacked;
  resource?: Tresource;
  title: Ttitle;
  icon: TcardIcon;
  onClickEvent: TonClickEvent;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockStacked = (): boolean => false;
const mockResource = (): boolean => false;
const mockTitle = (): string => faker.commerce.department();
const mockIcon = (): string => faker.random.arrayElement(icons);
const mockOnClickEvent = (): any => '#';

export { mockStacked, mockResource, mockTitle, mockIcon, mockOnClickEvent };

export default {
  stacked: mockStacked(),
  resource: mockResource(),
  title: mockTitle(),
  icon: mockIcon(),
  onClickEvent: mockOnClickEvent(),
};
