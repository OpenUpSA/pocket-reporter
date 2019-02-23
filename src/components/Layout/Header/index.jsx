import React, { Component, Fragment } from 'react';
import BackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';


import {
  HeaderWrapper,
  HeaderBar,
  HeaderLink,
  HeaderText,
} from './styled';


const backButton = (
  <IconButton color="inherit">
    <HeaderLink to="/english/folders/index.html">
      <BackIcon />
    </HeaderLink>
  </IconButton>
);


// const titleStoryMarkup = (
//   <Fragment>
//     <HeaderButton color="inherit">
//       <EmailIcon />
//     </HeaderButton>
//     <HeaderButton color="inherit">
//       <DeleteIcon />
//     </HeaderButton>
//   </Fragment>
// );


// const titleStoryListMarkup = (
//   <HeaderButton color="inherit">
//     <SettingsIcon />
//   </HeaderButton>
// );


const Header = (props) => {
  const {
    start,
    about,
    settings,
    story,
    storyList,
    resources,
    title,
    back,
  } = props;

  return (
    <HeaderWrapper>
      <HeaderBar>
        {!!back && backButton}
        <HeaderText>
          {title}
        </HeaderText>
      </HeaderBar>
      {/* {!!titleStory && titleStoryMarkup}
      {!!titleStoryList && titleStoryListMarkup} */}
      {/* {progressBar} */}
    </HeaderWrapper>
  );
};


export default Header;
