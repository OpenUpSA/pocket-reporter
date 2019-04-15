import React from 'react';

import { Link as link } from 'gatsby';
import ListOfFolders from '../../views/ListOfFolders';

const BrowserLoader = ({ pageContext }) => {
  const passedProps = {
    ...pageContext,
    link,
  };

  return <ListOfFolders {...passedProps} />;
};

export default BrowserLoader;
