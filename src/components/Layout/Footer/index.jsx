import React, { Fragment } from 'react';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';


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
  Click,
} from './styled';


const Footer = ({ isoKey, link }) => (
  <Fragment>
    <Gradient />
    <FooterWrapper>
      <FooterBar position="fixed">
        <FooterToolbar>
          <FooterList>
            <FooterItem>
              <FooterButton href="/">
                <ListIcon />
                <span>My stories</span>
              </FooterButton>
            </FooterItem>
            <FooterItem>
              <Click {...{ link }} click={`/${isoKey}/folders/index.html`}>
                <FooterButton href="/">
                  <AddButton aria-label="Add Story">
                    <StyledAddIcon />
                  </AddButton>
                </FooterButton>
              </Click>
            </FooterItem>
            <FooterItem>
              <FooterButton href="/about">
                <PersonIcon />
                <span>Profile</span>
              </FooterButton>
            </FooterItem>
          </FooterList>
        </FooterToolbar>
      </FooterBar>
    </FooterWrapper>
  </Fragment>
);


export default Footer;
