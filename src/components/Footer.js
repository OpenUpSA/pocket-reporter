import React from 'react'
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import HelpIcon from '@material-ui/icons/Help';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const FooterBar = styled.div`
  top: auto;
  bottom: 0;
  width: 100%;
  position: initial;
  background-color: #73c619;
  color: white;
  @media (min-width: 760px) 
  {
    width: 52%;
    margin: auto
  }
`;

const FooterToolbar = styled.div`
  padding: 0;
`;

const FooterButton = styled(IconButton)`
  &&{
    font-size: 12px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterBar position="fixed">
      <FooterToolbar>
        <FooterButton color="inherit" aria-label="Open drawer">
          <ButtonDiv>
            <ListIcon />
            My stories
          </ButtonDiv>
        </FooterButton>
        <Fab color="secondary" aria-label="Add">
          <AddIcon />
        </Fab>
        <FooterButton color="inherit">
          <ButtonDiv>
            <HelpIcon />
            About
          </ButtonDiv>
        </FooterButton>
      </FooterToolbar>
    </FooterBar>
  </FooterWrapper>
);

export default Footer