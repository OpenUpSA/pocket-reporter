import React from 'react';

import BackButton from './BackButton';
import IsoButton from './IsoButton';

import { HeaderWrapper, HeaderBar, HeaderText, BackButtonWrapper } from './styled';
import { Ttitle, Tback, TlayoutIsoKey, Tfallback } from '../schema';

interface PropsShape {
  title?: Ttitle;
  back?: Tback;
  isoKey?: TlayoutIsoKey;
  fallback?: Tfallback;
}

const Header = ({ title, back, isoKey, fallback }: PropsShape): JSX.Element => (
  <HeaderWrapper>
    <HeaderBar>
      <BackButtonWrapper>{!!back && <BackButton {...{ back }} />}</BackButtonWrapper>
      <HeaderText>{title}</HeaderText>
      <IsoButton {...{ isoKey, fallback }} />
    </HeaderBar>
  </HeaderWrapper>
);

export default Header;
