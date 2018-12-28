import React from 'react'
import styled from 'styled-components';

import logo from '../assets/meta/logo.png';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';

import Header from '../components/Header';

const StyledWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #73c619;
  background-image: radial-gradient(circle at 50% 50%, #b4ec51, #429321);
  position: fixed;
  top: 0px;
  bottom: 50px;
  left: 0px;
  right: 0px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto
  }
`;

const Go = styled(Button)`
  && {
    border: none;
    
    position: absolute;
    top: 25%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  position: fixed;
  top: 45%;
  left: 0px;
  right: 0px;
  text-align: center;
  font-size: 20px;
`;

const SubHeading = styled.h3`
  position: fixed;
  top: 60%;
  left: 15px;
  right: 15px;
  text-align: center;
  font-size: 16px;
  line-height: 1.3em;
  white-space: nowrap;
`;

const Language = styled.h4`
  position: fixed;
  top: 75%;
  left: 15px;
  right: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 1.3em;
  white-space: nowrap;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const IndexPage = () => (

  <React.Fragment>
    {/*<StyledWrapper>*/}
      {/*<Go>*/}
        {/*<StyledImage src={logo} />*/}
      {/*</Go>*/}
      {/*<Heading>*/}
        {/*A News Editor in Your Pocket*/}
        {/*</Heading>*/}
      {/*<SubHeading>*/}
        {/*Pocket Reporter helps you be a*/}
        {/*<br />*/}
        {/*better reporter by guiding you*/}
        {/*<br />*/}
        {/*through the news gathering process.*/}
      {/*</SubHeading>*/}
      {/*/!*TODO: Text to change to different language*!/*/}
      {/*<Language>*/}
        {/*<Link href="">Change language</Link>*/}
      {/*</Language>*/}
    {/*</StyledWrapper>*/}

    <Header />

    <Footer />

  </React.Fragment>

);

export default IndexPage
