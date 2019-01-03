import React from 'react'
import { Helmet } from "react-helmet"

import Footer from '../components/Footer';

import LandingPage from '../views/LandingPage';
import FoldersPage from '../views/FoldersPage';
import Header from '../components/Header';

import StoryTemplate from '../views/StoryTemplate';



const IndexPage = () => (
  <React.Fragment>
    {/*TODO: Is this used correctly?*/}
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    {/*<LandingPage />*/}

    {/*TODO: Show on all subsequent pages*/}
    {/*<Header />*/}

    <FoldersPage />
    {/*Story template*/}
    {/*<StoryTemplate />*/}

    <Footer />

  </React.Fragment>

);

export default IndexPage
