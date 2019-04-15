import React from 'react';

import iconsObject from './iconsObject';
import { Tprops } from './schema';

const Icon = ({ type }: Tprops): JSX.Element => {
  const Result = iconsObject[type];
  return <Result />;
};

export default Icon;
