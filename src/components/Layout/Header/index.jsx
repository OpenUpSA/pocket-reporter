import React from 'react';
import t from 'prop-types';
import BackIcon from '@material-ui/icons/ArrowBack';
import WarningIcon from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';


import ClickWrapper from '../../ClickWrapper';


import {
  HeaderWrapper,
  HeaderBar,
  HeaderText,
  BackButton,
  IsoKeyWrapper,
  Wrapper,
} from './styled';


const createBackButton = (back, link) => (
  <BackButton>
    <ClickWrapper click={back} {...{ link }}>
      <BackIcon />
    </ClickWrapper>
  </BackButton>
);


const tooltipMarkup = (
  <Tooltip title="Translation not supported on this page" placement="bottom">
    <WarningIcon />
  </Tooltip>
);


const buildIsoButton = (isoKey, link, fallback) => (
  <Wrapper>
    {!!fallback && tooltipMarkup}
    <ClickWrapper click="/profile" {...{ link }}>
      <IsoKeyWrapper>
        {isoKey}
      </IsoKeyWrapper>
    </ClickWrapper>
  </Wrapper>
);


const Header = (props) => {
  const {
    title,
    back,
    link,
    isoKey,
    fallback,
  } = props;

  return (
    <HeaderWrapper>
      <HeaderBar>
        {!!back && createBackButton(back, link)}
        <HeaderText>
          {title}
        </HeaderText>
        {buildIsoButton(isoKey, link, fallback)}
      </HeaderBar>
    </HeaderWrapper>
  );
};


export default Header;


Header.propTypes = {
  title: t.string,
  back: t.oneOfType([t.string, t.func]),
  link: t.node,
  isoKey: t.string.isRequired,
};


Header.defaultProps = {
  title: null,
  back: null,
  link: null,
};
