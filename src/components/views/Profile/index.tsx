import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import { isoKeys, languages } from '../../../data/hardcoded/languages/schema';
import Layout from '../../global/Layout';
import Heading from '../../global/Heading';
import { Wrapper, AboutButton, StyledClickWrapper } from './styled';

const Item = ({ value, setIsoKey, isoKey }) => (
  <FormControlLabel
    {...{ value }}
    control={<Radio />}
    checked={isoKey === value}
    onChange={() => setIsoKey(value)}
    // @ts-ignore
    label={languages.find(({ isoKey: id }) => id === value).nativeName}
  />
);

const Markup = props => {
  const { isoKey, setLanguage } = props;

  return (
    <Layout title="User Profile" back={`/${isoKey}/folders/index.html`} {...{ isoKey }}>
      <StyledClickWrapper onClickEvent="/about" full>
        <AboutButton>Learn more about Pocket Reporter</AboutButton>
      </StyledClickWrapper>
      <Heading>Change Language</Heading>
      <Wrapper>
        <RadioGroup name="languages" value={isoKey}>
          {isoKeys.map(value => (
            <Item {...{ value, setIsoKey: setLanguage, isoKey }} key={value} />
          ))}
        </RadioGroup>
      </Wrapper>
    </Layout>
  );
};

export default Markup;
