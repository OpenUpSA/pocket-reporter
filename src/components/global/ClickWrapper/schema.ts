/* eslint-disable no-console */

import faker from 'faker';

/**
 * A URL that a user will be directed to once the click on this component.
 */
export type Turl = string;

/**
 * The name of a domain written in the same the same format that is returned by
 * `window.location.hostName`. For example: 'developer.mozilla.org'. This value is used if you want
 * to override the current hostname value. This is useful for testing, when the domain name might
 * not coincide with actual domain name that will be used.
 */
export type TforceDomain = string;

type callback = (string) => void | null;

/**
 * Value that instructs this component what to do if any of it's children are clicked on. If a
 * string is passed then it will navigate to the string as a URL, however if a function is passed it
 * will call the function once any of the component's children are clicked.
 */
export type TonClickEvent = string | callback;

/**
 * Sets component's width to 100%;
 */
export type TfullWidth = boolean;

/**
 * Sets component's height to 100%;
 */
export type TfullHeight = boolean;

/**
 * If true, then a component will display with 'block model' CSS and set both it's width and height
 * to 100%. However, if you want only the height or width to be set to 100% then you can pass an
 * array of two booleans. The first value sets the width to 100%, while the second sets the height
 * to 100%. This means that it might look like `[true, false]` if you just want to set the width.
 * Alternatively is no value is supplied then both values will be set to `inherit` and use the
 * 'inline model' CSS. For more information, see
 * https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model.
 */
export type Tfull = boolean | [TfullWidth, TfullHeight];

/**
 * Props that `<ClickWrapper />` accepts.
 */
export interface Tprops {
  onClickEvent: TonClickEvent;
  full?: Tfull;
  linkType: any;
  children: JSX.Element | JSX.Element[];
}

/**
 * Create mock props to pass to `<ClickWrapper />`
 */
const mockOnClickEvent = (): any => (): void => console.log('Clicked');
const mockFull = (): boolean => faker.random.boolean();
const mockLinkType = (): string => 'a';
const mockChildren = (): string => faker.hacker.phrase();

export { mockOnClickEvent, mockFull, mockLinkType, mockChildren };

export default {
  onClickEvent: mockOnClickEvent(),
  full: mockFull(),
  linkType: mockLinkType(),
  children: mockChildren(),
};
