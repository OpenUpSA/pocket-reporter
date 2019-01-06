import React from 'react';
import ListOfFolders from '../views/ListOfFolders';

import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';

const List = () => (

  <React.Fragment>

    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <ListOfFolders />

    <Footer />

  </React.Fragment>

)

export default List;