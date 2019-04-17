import React, { Fragment } from 'react';
import { List, Person } from '@material-ui/icons';

import ClickWrapper from '../../ClickWrapper';
import { TlayoutIsoKey } from '../schema';
import {
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
  Gradient,
  Float,
} from './styled';

interface PropsShape {
  isoKey: TlayoutIsoKey;
}

const Footer = ({ isoKey }: PropsShape): JSX.Element => (
  <Fragment>
    <Gradient />
    <FooterWrapper>
      <FooterBar>
        <FooterToolbar>
          <FooterList>
            <FooterItem>
              <ClickWrapper onClickEvent="/stories" full>
                <FooterButton>
                  <List />
                  <span>My stories</span>
                </FooterButton>
              </ClickWrapper>
            </FooterItem>
            <Float>
              <FooterItem>
                <ClickWrapper onClickEvent={`/${isoKey}/folders/index.html`} full>
                  <FooterButton>
                    <AddButton aria-label="Add Story">
                      <StyledAddIcon />
                    </AddButton>
                  </FooterButton>
                </ClickWrapper>
              </FooterItem>
            </Float>
            <FooterItem>
              <ClickWrapper onClickEvent="/profile" full>
                <FooterButton>
                  <Person />
                  <span>Profile</span>
                </FooterButton>
              </ClickWrapper>
            </FooterItem>
          </FooterList>
        </FooterToolbar>
      </FooterBar>
    </FooterWrapper>
  </Fragment>
);

export default Footer;
