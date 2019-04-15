import React from 'react';
import connectToReduxStore from './connectToReduxStore';
import ViewLoader from './ViewLoader';
import { Consumer } from '../../../services/utilities/gatsbyContext';

/**
 * TODO: Add description
 */
const Loader = (props): JSX.Element => (
  <Consumer>{({ navigate }) => <ViewLoader {...{ ...props, navigate }} />}</Consumer>
);

export default connectToReduxStore(Loader);
