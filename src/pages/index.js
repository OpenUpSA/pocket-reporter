import { createElement } from 'react';
import { navigate } from 'gatsby';


import store from '../redux/store';
import SplashScreen from '../views/SplashScreen';


const { user, stories = [] } = store.getState();
const { language } = user;


const props = {
  loading: true,
  language,
  storiesAmount: stories.length,
  navigate,
};


export default () => createElement(SplashScreen, props);
