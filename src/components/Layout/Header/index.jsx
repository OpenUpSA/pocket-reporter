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


const buildIsoButton = (isoKey, link) => (
  <Wrapper>
    <Tooltip title="Translation not supported on this page" placement="bottom">
      <WarningIcon />
    </Tooltip>
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
  } = props;

  return (
    <HeaderWrapper>
      <HeaderBar>
        {!!back && createBackButton(back, link)}
        <HeaderText>
          {title}
        </HeaderText>
        {buildIsoButton(isoKey, link)}
      </HeaderBar>
    </HeaderWrapper>
  );
};


export default Header;


Header.propTypes = {
  /** The title that will be displayed in the header. **/
  title: t.string,
  /** Determines whether or not the back button should be displayed in the header. **/
  back: t.oneOfType([t.string, t.func]),
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
  /** Displays the language that has been selected by the user. **/
  isoKey: t.string.isRequired,
};


Header.defaultProps = {
  title: null,
  back: null,
  link: null,
};
