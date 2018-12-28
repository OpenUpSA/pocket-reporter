import React from 'react'
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import BackIcon from '@material-ui/icons/ArrowBack';

const HeaderWrapper = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
    right: 0;
  }
`;

const HeaderBar = styled.div`
  top: 0;
  width: 100%;
  position: initial;
  background-color: #4a4a4a;
  height: 50px;
  display: flex;
  align-items: center;
`;

const HeaderButton = styled(IconButton)`
  
`;

//TODO: Add negative margin-left when back button is visible
const HeaderText = styled.p`
  width: 100%;
  margin: 0;
  color: white;
  text-align: center;
`;

const HeaderTitle = styled.h3`
  color: #4a4a4a;
  padding: 10px 0;
`;

const HeaderProgress = styled(LinearProgress)`
  && {
    height: 10px;
    background-color: rgba(115, 198, 25, 0.4);
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderBar>
      <HeaderButton color="inherit">
        {/*TODO: ONLY show after first select*/}
        <BackIcon />
      </HeaderButton>
      <HeaderText>
        {/*TODO: Change language*/}
        Start a New Story
      </HeaderText>
    </HeaderBar>
    {/*TODO: Change wording to progress bar after second selection*/}
    <HeaderTitle>
      What type of story are you writing?
    </HeaderTitle>
    {/*TODO: Change colour, dynamic value*/}
    {/*<HeaderProgress color="secondary" variant="determinate" value="38" />*/}
  </HeaderWrapper>
);

export default Header