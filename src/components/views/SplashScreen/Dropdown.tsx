import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import { languages } from '../../../data/hardcoded/languages/schema';
import { StyledSelect, SelectWrap } from './styled';

// isoKey ? mappings.find(({ isoKey: id }): string => id === isoKey).nativeName |

const Dropdown = ({ setIsoKey, isoKey, disabled, setLanguage }): JSX.Element => (
  <SelectWrap>
    <StyledSelect
      disabled={disabled}
      displayEmpty
      renderValue={() => (disabled ? 'Loading...' : 'Select Language')}
      classes={{ select: 'select' }}
      onChange={event => setLanguage(event.target.value)}
    >
      {languages.map(
        ({ isoKey: innerIsoKey, nativeName }): JSX.Element => (
          <MenuItem key={innerIsoKey} value={innerIsoKey}>
            {nativeName}
          </MenuItem>
        ),
      )}
    </StyledSelect>
  </SelectWrap>
);

export default Dropdown;
