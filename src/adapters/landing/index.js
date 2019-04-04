import { createElement } from 'react';
import { navigate } from 'gatsby';
import store from '../../redux/store';
import SplashScreen from '../../views/SplashScreen';


const { info, stories = [] } = store.getState();
const { language } = info;


const passedProps = {
  loading: true,
  language,
  storiesAmount: stories.length,
  navigate,
};


const landing = () => createElement(SplashScreen, passedProps);

export default landing;
