import React from 'react';

import { StyledHeading } from './styled';
import { Tprops } from './schema';

const Heading = ({ children, component }: Tprops): JSX.Element => (
  <StyledHeading {...{ component }}>{children}</StyledHeading>
);

export default Heading;
