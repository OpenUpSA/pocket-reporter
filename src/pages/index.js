import React from 'react'
import { Helmet } from "react-helmet"

import Footer from '../components/Footer';

import LandingPage from '../views/LandingPage';
import FoldersPage from '../views/FoldersPage';
import StoryTemplate from '../views/StoryTemplate';



const IndexPage = () => (
  <React.Fragment>
    {/*TODO: Is this used correctly?*/}
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    {/*<LandingPage />*/}

    {/*<FoldersPage />*/}

    <StoryTemplate />

    {/*<AboutPage />*/}

    <Footer />

  </React.Fragment>

);

export default IndexPage
