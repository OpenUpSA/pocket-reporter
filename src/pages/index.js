import React from 'react'

import Footer from '../components/Footer';

import LandingPage from '../views/LandingPage';
import Header from '../components/Header';
import Cards from '../components/Cards';
import StoryTemplate from '../views/StoryTemplate';



const IndexPage = () => (

  <React.Fragment>

    {/*<LandingPage />*/}

    {/*TODO: Show on all subsequent pages*/}
    <Header />

    {/*TODO: Show on first and second selection page*/}
    <Cards />

    {/*Story template*/}
    {/*<StoryTemplate />*/}

    <Footer />

  </React.Fragment>

);

export default IndexPage
