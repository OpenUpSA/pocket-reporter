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
} from './styled';


const Footer = () => (
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
              <FooterButton href="/">
                <AddButton aria-label="Add Story">
                  <StyledAddIcon />
                </AddButton>
              </FooterButton>
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
