import Story from '../../views/Story';
import connectToReduxStore from './connectToReduxStore';

const start = connectToReduxStore(Story);

export default start;
