import React from 'react'
import { Helmet } from "react-helmet"

import Footer from '../components/Footer';

import LandingPage from '../views/LandingPage';
import FolderContent from '../views/FolderContent';
import StoryTemplate from '../views/StoryTemplate';
import AboutPage from '../views/AboutPage';
import Settings from '../views/Settings';
import Stories from '../views/Stories';

const IndexPage = () => (
  <React.Fragment>
    {/*TODO: Is this used correctly?*/}
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    {/*<LandingPage />*/}

    {/*<FolderContent />*/}

    {/*<StoryTemplate />*/}

    {/*<AboutPage />*/}

    {/*<Settings />*/}

    <Stories />

    <Footer />

  </React.Fragment>

);

export default IndexPage
