import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';

import Button from '@material-ui/core/Button';

const AboutWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 21px;
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
`;

const AboutButton = styled(Button)`
  width: 100%;
  && {
    margin-bottom: 5px;
    text-transform: none;
  }
`;

const AboutLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
`;

const AboutPage = () => (
  <React.Fragment>
    <Header />

    <AboutWrapper>
      <p>Pocket Reporter is a news editor in your pocket that helps you be a better reporter.</p>
      <p>Simply answer the questions as Pocket Reporter guides you through the news gathering process.</p>

      <AboutButton variant="contained" color="primary">
          Change language
      </AboutButton>
      <AboutButton variant="contained" color="primary">
          Send us feedback
      </AboutButton>

      <h3>Background</h3>
      <p>
        Pocket Reporter is built by
        <AboutLink href="https://openup.org.za/"> OpenUp </AboutLink>
        and is inspired by the
        <AboutLink href="http://nqabile.co.za/virtual"> Virtual Reporter Tool </AboutLink>
        by
        <AboutLink href="http://kanthanpillay.com/content/about"> Kanthan Pillay. </AboutLink>
      </p>

      <AboutButton variant="contained" color="primary" href="https://pocketreporter.co.za" target="_blank">
        PocketReporter.co.za
      </AboutButton>

      <h3>OpenUp</h3>
      <p>OpenUp is a non-profit organisation that promotes informed decision-making that drives social change. Find out more at <AboutLink href="https://openup.org.za/">openup.org.za.</AboutLink></p>
    </AboutWrapper>

  </React.Fragment>
);

export default AboutPage;