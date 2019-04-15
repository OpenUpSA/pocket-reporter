import React from 'react';
import connectToReduxStore from './connectToReduxStore';
import { Consumer } from '../../../services/utilities/gatsbyContext';
import FolderContent from '../../views/FolderContent';

/**
 * TODO: Add description
 */
const Loader = ({ pageContext, onStoryTemplatePress }): JSX.Element => (
  <FolderContent {...{ ...pageContext, onStoryTemplatePress }} />
);

export default connectToReduxStore(Loader);
