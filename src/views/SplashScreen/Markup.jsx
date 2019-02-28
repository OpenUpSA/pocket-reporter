import React from 'react';
import t from 'prop-types';


import Dropdown from './Dropdown';
import Heading from '../../components/Heading';
import logo from '../../assets/meta/logo.png';
import Layout from '../../components/Layout';
import {
  StyledWrapper,
  StyledImage,
  DisplayText,
  HeadingWrap,
} from './styled';


const Markup = ({ setIsoKey, isoKey }) => {
  return (
    <Layout header={false} footer={false} noPadding>
      <StyledWrapper>
        <StyledImage src={logo} />
        <DisplayText>
          A News Editor in Your Pocket
        </DisplayText>
        <HeadingWrap>
          <Heading>
            Pocket Reporter helps you be a better reporter by guiding you through the news gathering process.
          </Heading>
        </HeadingWrap>
        <Dropdown {...{ setIsoKey, isoKey }} />
      </StyledWrapper>
    </Layout>
  );
};


export default Markup;


Markup.propTypes = {
  /** React content nested inside this component. */
  children: t.node,
};


Markup.defaultProps = {
  children: null,
};
