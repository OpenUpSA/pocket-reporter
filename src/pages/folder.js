import React from 'react';

import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';
import FolderContent from '../views/FolderContent';

const Folder = () => (

  <React.Fragment>
    {/*TODO: Is this used correctly?*/}
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <FolderContent />

    <Footer />

  </React.Fragment>

)

export default Folder