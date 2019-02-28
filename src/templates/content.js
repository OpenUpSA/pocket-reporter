import { createElement } from 'react';
import { Link as link } from 'gatsby';


import FolderContent from '../views/FolderContent';


const page = ({ pageContext }) => {
  const props = {
    ...pageContext,
    link,
  };

  return createElement(FolderContent, props);
};


export default page;
