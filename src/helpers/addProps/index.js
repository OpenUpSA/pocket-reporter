import { createElement } from 'react';


const addProps = (Component, outerProps, keyString) => (innerProps) => {
  const { children } = outerProps;
  const key = innerProps[keyString] || null;
  return createElement(Component, { ...outerProps, ...innerProps, key }, children);
};


export default addProps;
