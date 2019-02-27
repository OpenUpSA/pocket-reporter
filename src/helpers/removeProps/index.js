
import { createElement } from 'react';


const forceToArray = value => (Array.isArray(value) ? value : [value]);
const notInsideArray = (array = []) => value => !array.find(arrayValue => arrayValue === value);


const createRemoveProps = scopedCreateElement => (component, blacklist = []) => (props) => {
  const newPropsKeys = Object.keys(props).filter(notInsideArray(forceToArray(blacklist)));
  const newProps = newPropsKeys.reduce((result, key) => ({ ...result, [key]: props[key] }), {});
  return scopedCreateElement(component, newProps, props.children);
};


export { createRemoveProps };
export default createRemoveProps(createElement);
