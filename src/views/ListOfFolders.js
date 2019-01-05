import React from 'react'
import {Helmet} from 'react-helmet';

import Header from '../components/Header';
import Cards from '../components/Cards';

const ListOfFolders = () => (
  <React.Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <Header start/>

    <Cards stacked />

  </React.Fragment>
)

export default ListOfFolders;