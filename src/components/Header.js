import React, { Component } from 'react'
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import BackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';

const HeaderWrapper = styled.div`
  color: white;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
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
  margin: 10px 0;
  color: #4a4a4a;
`;

const HeaderProgress = styled(LinearProgress)`
  && {
    height: 10px;
    background-color: rgba(115, 198, 25, 0.4);
  }
  colorPrimary: {
    background-color: red;
  }
`;

class Header extends Component {

  render() {
    const titleStart = this.props.start;
    const titleAbout = this.props.about;
    const titleSettings = this.props.settings;

    let title;

    if (titleStart) {
      title = 'Start a New Story'
    } else if (titleAbout) {
      title = 'About Pocket Reporter'
    } else if (titleSettings) {
      title = 'Settings'
    }

    const back = this.props.back;
    let backButton;

    if (back) {
      backButton = (
        <HeaderButton color="inherit">
          <BackIcon />
        </HeaderButton>
        )
    }

    return (
      <HeaderWrapper>
        <HeaderBar>
          {backButton}
          <HeaderText>
            {/*TODO: Change language*/}
            {title}
            {/*TODO: Title of story on questions page*/}
            {/*Title of Story*/}
            {/*Pocket Reporter*/}
          </HeaderText>
          {/*TODO: Only show on StoryTemplate view*/}
          {/*<HeaderButton color="inherit">*/}
          {/*<EmailIcon />*/}
          {/*</HeaderButton>*/}
          {/*<HeaderButton color="inherit">*/}
          {/*<DeleteIcon />*/}
          {/*</HeaderButton>*/}
          {/*TODO: Only show when stories have been saved on landing page*/}
          {/*<HeaderButton color="inherit">*/}
            {/*<SettingsIcon/>*/}
          {/*</HeaderButton>*/}
        </HeaderBar>
        {/*TODO: Change wording to progress bar after second selection*/}
        {/*<HeaderTitle>*/}
        {/*What type of story are you writing?*/}
        {/*</HeaderTitle>*/}
        {/*TODO: Change colour, dynamic value*/}
        {/*<HeaderProgress variant="determinate" value="38" />*/}
      </HeaderWrapper>
    )
  }
};

export default Header