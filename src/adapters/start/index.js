import SplashScreen from '../../views/SplashScreen';
import connectToReduxStore from './connectToReduxStore';

const start = connectToReduxStore(SplashScreen);

export default start;
