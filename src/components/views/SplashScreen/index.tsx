import React from 'react';

import Dropdown from './Dropdown';
import Heading from '../../global/Heading';
import logo from '../../../data/assets/hardcoded/logo.png';
import Layout from '../../global/Layout';
import { StyledWrapper, StyledImage, DisplayText, HeadingWrap } from './styled';

const Markup = ({ setIsoKey, isoKey, loading, setLanguage }): JSX.Element => {
  return (
    <Layout skeleton>
      <StyledWrapper>
        <StyledImage src={logo} />
        <DisplayText>A News Editor in Your Pocket</DisplayText>
        <HeadingWrap>
          <Heading>
            Pocket Reporter helps you be a better reporter by guiding you through the news gathering
            process.
          </Heading>
        </HeadingWrap>
        <Dropdown {...{ setIsoKey, isoKey, setLanguage }} disabled={loading} />
      </StyledWrapper>
    </Layout>
  );
};

export default Markup;
