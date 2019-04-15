import React, { Fragment } from 'react';
import { ImageItem, AboutLogos, LogoImage } from './styled';
import Heading from '../../global/Heading';
import ClickWrapper from '../../global/ClickWrapper';

const SinglePartner = ({ name, link, logo }): JSX.Element => (
  <ImageItem key={name}>
    <ClickWrapper onClickEvent={link}>
      <LogoImage src={logo} alt={name} />
    </ClickWrapper>
  </ImageItem>
);

const Partners = ({ partners }): JSX.Element => (
  <Fragment>
    <Heading>Partners</Heading>
    <AboutLogos>{partners.map(SinglePartner)}</AboutLogos>
  </Fragment>
);

export default Partners;
