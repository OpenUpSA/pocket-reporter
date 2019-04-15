import React from 'react';
import connectToReduxStore from './connectToReduxStore';
import ViewLoader from './ViewLoader';

/**
 * TODO: Add description
 */
const Loader = (props): JSX.Element => <ViewLoader {...props} />;

export default connectToReduxStore(Loader);
