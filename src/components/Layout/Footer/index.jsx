import React from 'react';
import ListIcon from '@material-ui/icons/List';
import HelpIcon from '@material-ui/icons/Help';


import {
  FooterWrapper,
  FooterBar,
  FooterToolbar,
  FooterList,
  FooterItem,
  FooterButton,
  AddButton,
  StyledAddIcon,
} from './styled';


const Footer = () => (
  <FooterWrapper>
    <FooterBar position="fixed">
      <FooterToolbar>
        <FooterList>
          <FooterItem>
            <FooterButton href="/">
              <ListIcon />
              My stories
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
              <HelpIcon />
              About
            </FooterButton>
          </FooterItem>
        </FooterList>
      </FooterToolbar>
    </FooterBar>
  </FooterWrapper>
);


export default Footer;
