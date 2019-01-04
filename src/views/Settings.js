import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const SettingsWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 21px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
`;

const SettingsHead = styled.h2`
  font-size: 16px;
`;

const Settings = () => (
  <React.Fragment>
    <Header />
    <SettingsWrapper>
      <FormControl component="fieldset">
        <SettingsHead component="legend">Choose your language:</SettingsHead>
        <RadioGroup
          aria-label="Language"
          name="language"
          value='English'
        >
          <FormControlLabel value="Afrikaans" control={<Radio />} label="Afrikaans" />
          <FormControlLabel value="English" control={<Radio />} label="English" />
          <FormControlLabel value="Espanol" control={<Radio />} label="Espanol" />
          <FormControlLabel value="IsiXhosa" control={<Radio />} label="IsiXhosa" />
          <FormControlLabel value="Northern Sotho" control={<Radio />} label="Northern Sotho" />
          <FormControlLabel value="Português" control={<Radio />} label="Português" />
          <FormControlLabel value="Southern Sotho" control={<Radio />} label="Southern Sotho" />
          <FormControlLabel value="Tswana" control={<Radio />} label="Tswana" />
          <FormControlLabel value="isiZulu" control={<Radio />} label="isiZulu" />

        </RadioGroup>
      </FormControl>
    </SettingsWrapper>
  </React.Fragment>
);

export default Settings