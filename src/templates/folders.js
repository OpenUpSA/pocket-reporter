import { createElement } from 'react';


import { Link as link } from 'gatsby';
import ListOfFolders from '../views/ListOfFolders';


const page = ({ pageContext }) => {
  const props = {
    ...pageContext,
    link,
  };

  return createElement(ListOfFolders, props);
};


export default page;
