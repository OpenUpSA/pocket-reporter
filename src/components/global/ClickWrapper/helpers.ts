import { Turl, TforceDomain } from './types';

/**
 * A function that calculates whether the url passed links to a location in the current site or
 * whether it links to an external page or resource.
 */
const calcIfExternalLink = (url: Turl, forceDomain?: TforceDomain): boolean => {
  if (/^\//.test(url)) {
    return false;
  }

  const condition = new RegExp(forceDomain, 'i');
  return !condition.test(url);
};

/**
 * A function that calculates whether the value that is passed is a function.
 */
const calcIfFunction = (value: any): boolean => ({}.toString.call(value) === '[object Function]'); // eslint-disable-line @typescript-eslint/no-explicit-any

export { calcIfExternalLink, calcIfFunction };
export default { calcIfExternalLink, calcIfFunction };
