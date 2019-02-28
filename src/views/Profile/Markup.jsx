import React from 'react';
import t from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import languages from '../../config/languages';
import { isoToLanguage } from '../../helpers/languageConversions';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { Wrapper, AboutButton, StyledClickWrapper } from './styled';


const isoKeys = Object.keys(languages);


const Item = ({ value, setIsoKey, isoKey }) => (
  <FormControlLabel
    {...{ value }}
    control={<Radio />}
    checked={isoKey === value}
    onChange={() => setIsoKey(value)}
    label={isoToLanguage(value)}
  />
);


const Markup = (props) => {
  const {
    isoKey,
    setIsoKey,
  } = props;


  return (
    <Layout title="User Profile" back="#" {...{ isoKey }}>
      <Heading>Change Language</Heading>
      <Wrapper>
        <RadioGroup
          name="languages"
          value={isoKey}
        >
          {isoKeys.map(value => <Item {...{ value, setIsoKey, isoKey }} key={value} />)}
        </RadioGroup>
      </Wrapper>
      <StyledClickWrapper click="/profile/about" full>
        <AboutButton>Learn more about Pocket Reporter</AboutButton>
      </StyledClickWrapper>
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string.isRequired,
};
