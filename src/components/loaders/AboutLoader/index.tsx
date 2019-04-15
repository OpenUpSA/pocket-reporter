import React from 'react';
import About from '../../views/About';
import hardcodedProps from './hardcodedProps';
import connectToReduxStore from './connectToReduxStore';

/**
 * TODO: Add description
 */
const Loader = (props): JSX.Element => <About {...{ ...props, ...hardcodedProps }} />;

export default connectToReduxStore(Loader);
