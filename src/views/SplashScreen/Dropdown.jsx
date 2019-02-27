import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';


import languages from '../../config/languages';
import { StyledSelect, SelectWrap } from './styled';

const isoKeys = Object.keys(languages);


const Dropdown = ({ setIsoKey, isoKey }) => (
  <SelectWrap>
    <StyledSelect
      displayEmpty
      value={isoKey || ''}
      renderValue={value => languages[value] || 'Select Language'}
      classes={{ select: 'select' }}
      onChange={event => setIsoKey(event.target.value)}
    >
      {isoKeys.map(value => <MenuItem key={value} {...{ value }}>{languages[value]}</MenuItem>)}
    </StyledSelect>
  </SelectWrap>
);

export default Dropdown;
