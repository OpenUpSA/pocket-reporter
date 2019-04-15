import React from 'react';

import { Wrapper, IsoKeyWrapper } from './styled';
import ClickWrapper from '../../ClickWrapper';
import Tooltip from './Tooltip';

const IsoButton = ({ isoKey, fallback }): JSX.Element => (
  <Wrapper>
    <Tooltip {...{ fallback }} />
    <ClickWrapper onClickEvent="/profile">
      <IsoKeyWrapper>{isoKey}</IsoKeyWrapper>
    </ClickWrapper>
  </Wrapper>
);

export default IsoButton;
