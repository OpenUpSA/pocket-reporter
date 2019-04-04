inmport { createElement } from 'react';

import connectToReduxStore from './connectToReduxStore';
import DataLoader from './DataLoader';

const intro = () => createElement(connectToReduxStore(DataLoader));
export default intro;
