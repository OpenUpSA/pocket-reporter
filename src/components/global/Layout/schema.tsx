/* eslint-disable no-console */

import React from 'react';
import faker from 'faker';

import { isoKeys, TisoKey } from '../../../data/hardcoded/languages/schema';

/**
 * The title to show inside the header bar at the top of the page.
 */
export type Ttitle = string;

/**
 * What to do if the back button is pressed. Accepts a string (for URLS) or function (for
 * callbacks). If no value is provided the back button will not be displayed.
 */
export type Tback = any;

/**
 * The ISO key to show in the right hand corner of the header. This does not actually influence the
 * language being used, but is merely used to display what language is being used in the header.
 */
export type TlayoutIsoKey = TisoKey;

/**
 * If set to true a warning icon will be shown next to the ISO key in the header. If a user hovers
 * or clicks on the warning icon a message will appear that says 'Translation not supported on this
 * page'
 */
export type Tfallback = boolean;

/**
 * By default the Layout component automatically adds a header and footer. If true then layout does
 * not wrap the content with any markup, but merely applies global styling to the page.
 */
export type Tskeleton = boolean;

/**
 * Props accepted by `<Header />` component.
 */
export interface Tprops {
  children: JSX.Element | JSX.Element[];
  title?: Ttitle;
  back?: Tback;
  isoKey?: TlayoutIsoKey;
  fallback?: Tfallback;
  skeleton?: Tskeleton;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockChildren = (): JSX.Element => <div>{faker.lorem.paragraphs(20)}</div>;
const mockTitle = (): string => faker.commerce.productName();
const mockBack = (): string => faker.internet.url();
const mockIsoKey = (): TlayoutIsoKey => faker.random.arrayElement(isoKeys) as TisoKey;
const mockFallback = (): boolean => false;
const mockSkeleton = (): boolean => false;

const mockProps: Tprops = {
  children: mockChildren(),
  title: mockTitle(),
  back: mockBack(),
  isoKey: mockIsoKey(),
  fallback: mockFallback(),
  skeleton: mockSkeleton(),
};

export { mockChildren, mockTitle, mockBack, mockIsoKey, mockFallback, mockSkeleton };
export default mockProps;
