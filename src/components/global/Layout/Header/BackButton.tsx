import React from 'react';

import { ArrowBack as BackIcon } from '@material-ui/icons';
import ClickWrapper from '../../ClickWrapper';

const BackButton = ({ back }): JSX.Element => (
  <ClickWrapper onClickEvent={back}>
    <BackIcon />
  </ClickWrapper>
);

export default BackButton;
