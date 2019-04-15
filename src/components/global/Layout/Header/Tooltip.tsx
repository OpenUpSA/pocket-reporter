import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Warning as WarningIcon } from '@material-ui/icons';

import { WarningWrapper } from './styled';

const IsoTooltip = ({ fallback }: any): JSX.Element => (
  <Tooltip title={!!fallback && 'Translation not supported on this page'} placement="bottom">
    <WarningWrapper>{fallback && <WarningIcon />}</WarningWrapper>
  </Tooltip>
);

export default IsoTooltip;
